import rootAPI, {_rootPath} from "../rootAPI";

const path = {
    mess: `${_rootPath}/tinnhan`,
};

function getListMess(data, callback) {
    rootAPI({withToken: false}).get(path.mess, {
        params: data
    })
        .then(res => {
            return callback(null, res.data);
        })
        .catch(error => {
            return callback(error);
        });
}

export default {
    getListMess
};
