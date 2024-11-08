import { defineStore } from "pinia";
import axiosInstance from "@/util/axiosInstance";

export const usePolicyStore = defineStore("policy", {
  state: () => ({
    PolicyInfoList: [],
    PolicyDetail: {
      idx: null,
      subject: null,
      condition: null,
      content: null,
      scale: null,
      enquiry: null,
      way: null,
      document: null,
      url: null,
    },
  }),

  actions: {
    async getPolicyInfo() {
      try {
        const response = await axiosInstance.get("/policy/list");
        this.PolicyInfoList = response.data.response.data;
      } catch (error) {
        console.error("Failed to fetch policy List : ", error);
        throw error;
      }
    },

    async getPolicyDetail(idx) {
      try {
        const response = await axiosInstance.get(`/policy/detail/${idx}`);
        this.PolicyDetail = response.data.response.data;
      } catch (error) {
        console.error("Failed to fetch Policy Detail : ", error);
        throw error;
      }
    },
  },
});
