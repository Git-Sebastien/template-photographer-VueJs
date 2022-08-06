import { reactive } from "vue";


export const store = reactive({
    isActive: false,
    toggle() {
        return this.isActive = !this.isActive
    }
})