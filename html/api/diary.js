//     日记相关的数据接口
function getPage(pageSize,pageNumber,callback){  //pageSize:每页数据量 pageNumber：页码 
   query.createQuery(function( ret, err ){
    if( err ){
          
    }else{
         query.limit({
           qid: ret.qid, 
           value: pageSize
         });
         query.skip({
            qid: ret.qid, 
            value: (pageNumber-1)*pageSize
          });
          query.desc({
              qid: ret.qid, 
              column: 'createdAt'
           });
          query.include({
              qid: ret.qid,
              column: 'author'
            });
          query.whereEqual({
             qid: ret.qid,
             column: 'type',
             value: 1
          });
         model.findAll({
           class: 'diary',
           qid: ret.qid
           }, function( ret, err ){
            callback(ret,err);
           });
    }
});
}

function getMyPage(pageSize,pageNumber,myID,type,callback){  //pageSize:每页数据量 pageNumber：页码 
   query.createQuery(function( ret, err ){
    if( err ){
          
    }else{
         query.limit({
           qid: ret.qid, 
           value: pageSize
         });
         query.skip({
            qid: ret.qid, 
            value: (pageNumber-1)*pageSize
          });
          query.desc({
              qid: ret.qid, 
              column: 'createdAt'
           });
          query.include({
              qid: ret.qid,
              column: 'author'
            });
          query.whereEqual({
             qid: ret.qid,
             column: 'type',
             value: type
          });
          query.whereEqual({
             qid: ret.qid,
             column: 'author',
             value: myID
          });
         model.findAll({
           class: 'diary',
           qid: ret.qid
           }, function( ret, err ){
            callback(ret,err);
           });
    }
});
}

function getComment(diaryId){  //获取对应日记的评论列表
  
  query.createQuery(function( ret, err ){
    if( err ){
          
    }else{
         
          query.desc({
              qid: ret.qid, 
              column: 'createdAt'
           });
          query.include({
              qid: ret.qid,
              column: 'commentUser'
            });
         query.include({
              qid: ret.qid,
              column: 'main'
            });
          query.whereEqual({
             qid: ret.qid,
             column: 'main',
             value: diaryId
          });
         model.findAll({
           class: 'diaryComment',
           qid: ret.qid
           }, function( ret, err ){
            callback(ret,err);
           });
    }
});
}