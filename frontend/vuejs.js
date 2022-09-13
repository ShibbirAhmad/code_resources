


       <div class="form-group text-center">
           <button :disabled="form.busy" type="submit" class="btn btn-primary">
               <i class="fa fa-spin fa-spinner" v-if="form.busy"></i>Submit
           </button>
       </div>