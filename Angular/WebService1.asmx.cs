using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

namespace Angular
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetCompanys()
        {
            List<Company> com = new List<Company>();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con=new SqlConnection(cs))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("select * from Companyprofile",con);
                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    Company c = new Company();
                    c.name = dr["name"].ToString();
                    c.email = dr["email"].ToString();
                    c.pan = dr["pan"].ToString();
                    c.gst = dr["gst"].ToString();
                    c.contact = dr["contact"].ToString();
                    c.com_address = dr["com_address"].ToString();
                    c.bank_name = dr["bank_name"].ToString();
                    c.Acc_name=dr["Acc_name"].ToString();
                    c.Acc_number=dr["Acc_number"].ToString();
                    c.ifsc_number = dr["ifsc_number"].ToString();
                    com.Add(c);
                }
                
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(com));
        }
    }
}
