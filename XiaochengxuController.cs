using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SkyCommon;
using SkyDal;
using SkyEntity;

namespace Peibankongjian.Controllers
{
    public class XiaochengxuController : Controller
    {
        private UnitOfWork unitOfWork = new UnitOfWork();
       

        public ActionResult GetBiji(int? page)
        {
            Pager pager = new Pager();
            pager.table = "RenwuDaka";
            pager.strwhere = "1=1";
            pager.PageSize = 2;
            pager.PageNo = page ?? 1;
            pager.FieldKey = "Id";
            pager.FiledOrder = "Id desc";


            pager = CommonDal.GetPager(pager);
            IList<RenwuDaka> List = DataConvertHelper<RenwuDaka>.ConvertToModel(pager.EntityDataTable);

            System.Web.Script.Serialization.JavaScriptSerializer js = new System.Web.Script.Serialization.JavaScriptSerializer();
            string json = js.Serialize(new { pagecount = pager.PageCount, dakas = List });//将对象序列化成JSON字符串。匿名类。向浏览器返回多个JSON对象。 

            return Content(json);

        }

        public ActionResult GetBijiById(int id)
        {
            RenwuDaka biji= unitOfWork.renwuDakasRepository.GetByID(id);
            string json = JsonHelper.JsonSerializerBySingleData(biji);
            return Content(json);

        }
    }
}