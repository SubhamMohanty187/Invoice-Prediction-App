import axios from "axios";

export const Data = async () => {
  let response = await axios.get("http://localhost:8080/h2h/winter_internship?limit=50000");
  // console.log(response.data);
  return response.data;
}

export const EditData = async (invoiceCurrency,custPaymentTerms,rowdetails) => {
  let res;
  const url = `http://localhost:8080/h2h/updateInWinter?ic=${invoiceCurrency}&cpt=${custPaymentTerms}&cn=${rowdetails}`;
  await axios.put(url).then((response) => {
    res = response;
    console.log(url);
  }).catch(({ response }) => {

  });

  return res;
}

export const AdvSearchData = async (doc_id,inv_id,byear,cust_num) => {
  let res;
  await axios.get(`http://localhost:8080/h2h/searchData?byear=${byear}&inv=${inv_id}&doc=${doc_id}&cn=${cust_num}`).then((response) => {
    res = response;
    console.log(res.data);
  }).catch(({ response }) => {

  });

  return res;
}


export const AddData = async (body) => {
  let res;
  await axios.post(`http://localhost:8080/h2h/insertIntoWinter`, body).then((response) => {
    res = response;
  }).catch(({ response }) => {
    res = response;
  });
  return res;

}


export const DeleteData = async (row_no) => {
  let res;
  await axios.get(`http://localhost:8080/h2h/deleteFromWinter?cn=${row_no}`).then((response) => {
    res = response;
    console.log(res.data);
  }).catch(({ response }) => {

  });

  return res;
}

export const searchData = async (cn) => {
  let res;
  await axios.get(`http://localhost:8080/h2h/searchInvoice?cn=${cn}`).then((response) => {
    res = response;
    console.log(res.data);
  }).catch(({ response }) => {

  });

  return res;
}