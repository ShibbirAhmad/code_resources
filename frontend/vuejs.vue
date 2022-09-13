<template>



                                <div class="box-body">
                                    <div class="form-group">
                                        <label>Customer Phone</label>
                                        <input
                                            type="text"
                                            name="customer_phone"
                                            class="form-control"

                                            placeholder="Enter customer 11 digit mobile number"
                                            v-model="form.customer_phone"
                                            @keyup="searchCustomer"
                                            :class="{
                                                'is-invalid': form.errors.has('customer_phone'),
                                            }"
                                        />
                                        <has-error :form="form" field="customer_phone"></has-error>
                                    </div>

                                    <div class="form-group">
                                        <label>Customer Name </label>
                                        <input
                                            type="text"
                                            name="name"
                                            class="form-control"

                                            placeholder="Name"
                                            v-model="form.name"
                                            :class="{
                                                'is-invalid': form.errors.has('name'),
                                            }"
                                        />
                                        <has-error :form="form" field="name"></has-error>
                                    </div>

                                    <div class="form-group">
                                        <label>Customer Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            class="form-control"

                                            placeholder="address"
                                            v-model="form.address"
                                            :class="{
                                                'is-invalid': form.errors.has('address'),
                                            }"
                                        />
                                        <has-error
                                            :form="form"
                                            field="address"
                                        ></has-error>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12 col-xs-6">
                                            <div class="form-group">
                                                <label>District</label>
                                                <select
                                                    name="city"
                                                    class="form-control"
                                                    v-model="form.city_id"
                                                    @change="selectCity"
                                                    :class="{
                                                        'is-invalid': form.errors.has('city'),
                                                    }"
                                                >
                                                    <option value="" disabled>Select District</option>
                                                    <option v-for="city in cities" :value="city.id">
                                                        {{ city.name }}
                                                    </option>
                                                </select>
                                                <has-error :form="form" field="city"></has-error>
                                            </div>
                                        </div>

                                        <div class="col-md-12 col-xs-6">
                                            <div class="form-group">
                                                <label >Thana/Upazila</label>
                                                <select
                                                    class="form-control"
                                                    name="sub_city"
                                                    :class="{
                                                        'is-invalid': form.errors.has('sub_city'),
                                                    }"
                                                    v-model="form.sub_city_id"
                                                >
                                                    <option disabled value="">
                                                        select Thana/Upazila
                                                    </option>
                                                    <option
                                                        v-if="sub_cities.length > 0"
                                                        v-for="sub_city in sub_cities"
                                                        :key="sub_city.id"
                                                        :value="sub_city.id"
                                                    >
                                                        {{ sub_city.name }}
                                                    </option>
                                                </select>
                                                <has-error
                                                    :form="form"
                                                    field="sub_city"
                                                ></has-error>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Order Notes (Optional)</label>
                                        <textarea
                                            class="form-control pb-2 pt-2 mb-0"
                                            v-model="form.note"
                                            rows="3"
                                            placeholder="Notes about your order, e.g. special notes for delivery"
                                        ></textarea>
                                    </div>
                                </div>



                                       <div class="form-group text-center">
                                        <button
                                            :disabled="form.busy"
                                            type="submit"
                                            class="btn btn-primary"
                                        >
                                            <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                                            >Submit
                                        </button>
                                    </div>


</template>