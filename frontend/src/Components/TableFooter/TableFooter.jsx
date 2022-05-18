import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";
import {next,previous} from "../../Store/TableSlice"

function TableFooter({totalEmployees}) {

  const tableLength = useSelector((state) => state.TableState.length);

  const indexStart = useSelector((state) => state.TableState.indexStart);
  const indexEnd = useSelector((state) => state.TableState.indexEnd);

  const dispatch = useDispatch();

  const employeeShow = totalEmployees ? indexStart + 1 : 0;
  const to = totalEmployees <= tableLength ? totalEmployees : indexEnd;
  const currentPage = useSelector((state) => state.TableState.currentPage);

  return (

    <div className="footerTable">

      <div className="footerTable-show">
        Showing <span>{employeeShow}</span> to <span>{to}</span> of {" "} <span>{totalEmployees}</span> entries
      </div>

      <div className="footerTable-pagination">
        {indexStart > 0 && (
          <button className="btn btn-prev" onClick={() => dispatch(previous())}>
           ← Previous
          </button>
        )}
        <p>{currentPage}</p>
        {indexEnd < totalEmployees && (
          <button className="btn btn-next" onClick={() => dispatch(next())}>
             Next →
          </button>
        )}
      </div>

    </div>
  );
}
  
export default TableFooter;

