import React, {Component} from 'react'

const WidgetList = () =>
<div>  
  <br/>
  <div class="form-group row">
        <div class="col-sm-1">
        <button type="button" class="btn btn-success"><i class="fa fa-plus"></i></button>
        </div>
        <div class="col-sm-2">
          <select id="widgets" class="form-control">
              <option value="heading">heading</option>
              <option value="list">list</option>
              <option value="paragraph">paragraph</option>
              <option value="image">image</option>
              <option value="link">link</option>
              </select> 
        </div>    
          <b>Preview</b>
          <i class="fa fa-toggle-on" style={{fontsize:"96px",color:"blue"}}></i>
          <label class="col-sm-1"></label>
          <div class="col-sm-1">
          <button type="button" class="btn btn-warning"><i class="fa fa-chevron-circle-down"></i></button>
          </div>
          <div class="col-sm-1">
          <button type="button" class="btn btn-warning"><i class="fa fa-chevron-circle-up"></i></button>
          </div>
          <div class="col-sm-1">
          <button type="button" class="btn btn-success">SAVE</button>
          </div>
          <div class="col-sm-1">
              <button type="button" class="btn btn-danger"><i class="fa fa-window-close" aria-hidden="true"></i></button>
              </div>
         </div>
        
          <div id="heading" class="group">
                  <div class="form-group row">
                  <div class="col-sm-8 col-form-label"><h3>Head Widget:</h3></div>      
                  </div>  
                  <div class="form-group row">       
                  <div class="col-sm-10">
                  <input type="text" id="headText" class="form-control" value="" placeholder="Heading text"/>
                  </div>
                  </div>
                  <div class="form-group row">
                  <div class="col-sm-10">
                  <select id="headval" class="form-control">
                  <option value="h1">Heading 1</option>
                  <option value="h2">Heading 2</option>
                  <option value="h3">Heading 3</option>
                  </select>
                  </div>
                  </div>
                  <div class="form-group row">       
                  <div class="col-sm-10">
                  <input type="text" id="wname" class="form-control" value="WDGT" placeholder="Widget name"/>
                  </div>
                  </div>
          </div>

          <div id="list" class="group">
                  <div class="form-group row">
                  <div class="col-sm-8 col-form-label"><h3>list Widget:</h3></div>      
                  </div>  

                  <div class="form-group row">       
                  <div class="col-sm-10">
                  <textarea  rows="4" cols="60" id="textList" placeholder="put more than one row here in the box"></textarea>
                  </div>
                  </div>
                  <div class="form-group row">
                  <div class="col-sm-10">
                  <select id="order" class="form-control">
                  <option value="ul">Unordered list</option>
                  <option value="ol">Ordered list</option>
                  </select>
                  </div>
                  </div>
                  <div class="form-group row">       
                  <div class="col-sm-10">
                  <input type="text" id="wname" class="form-control" placeholder="Widget name"/>
                  </div>
                  </div>
          </div>
          
        <div id="paragraph" class="group">
              <div class="form-group row">
                <div class="col-sm-8 col-form-label"><h3>paragraph Widget:</h3></div>       
              </div>  
              <div class="form-group row">       
                  <div class="col-sm-10">
                    <textarea rows="4" cols="60" id="textPara" placeholder="put your paragraph here in the box"></textarea>
                  </div>
                </div>
                <div class="form-group row">       
                  <div class="col-sm-10">
                    <input type="text" id="wname" class="form-control" placeholder="Widget name"/>
                  </div>
                </div>
        </div>
          
        <div id="image" class="group">
              <div class="form-group row">
                  <div class="col-sm-8 col-form-label"><h3>Image Widget:</h3></div>       
              </div>  
              <div class="form-group row">       
                  <div class="col-sm-10">
                    <input type="text" id="imageUrl" class="form-control" placeholder="input your image url here"/>
                  </div>
              </div>
              <div class="form-group row">
                  <div class="col-sm-10">
                    <input type="text" id="imageUrl" class="form-control" placeholder="input your image url here"/>
                  </div>   
              </div>
              <div class="form-group row">       
                  <div class="col-sm-10">
                    <input type="text" id="wname" class="form-control" placeholder="Widget name"/>
                  </div>
              </div>
        </div>     

        <div id="link" class="group">
              <div class="form-group row">
                <div class="col-sm-8 col-form-label"><h3>Link Widget:</h3></div>      
              </div>  
            
              <div class="form-group row">       
                      <div class="col-sm-10">
                        <input type="text" id="linkUrl" class="form-control" placeholder="input your link url here"/>
                      </div>
              </div>
              <div class="form-group row">       
                  <div class="col-sm-10">
                    <input type="text" id="linkText" class="form-control" placeholder="link text"/>
                  </div>
              </div>
              <div class="form-group row">       
                  <div class="col-sm-10">
                    <input type="text" id="wname" class="form-control" placeholder="Widget name"/>
                  </div>
              </div>
        </div>
               
          <hr/>    
          <h1 class="text-primary">Preview:</h1>      
          <div class="form-group row preview"> 
            <br/>
              <p id="toView"></p>
          </div>
</div>


export default WidgetList;