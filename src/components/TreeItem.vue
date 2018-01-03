<template>
    <div>
        <li>
            <div>
                <span v-if="isFolder"
                :class="{bold: isFolder}"
                @click="toggle"
                @dblclick="changeType" >[{{open ? '-' : '+'}}]</span>
                <my-item :item=model></my-item>
            </div>
            <ul v-show="open" v-if="isFolder">
                <item class="item" v-for="child in model.children" :model="child"> </item>
                <li class="add" @click="addChild">+</li>
            </ul>
        </li>
    </div>
</template>

<script>
import Item from '@/components/Item'
    export default{
        name: 'item',
        components: {'my-item': Item},
        props: {
            model: Object
        },
        data: function () {
            return {
                open: false
        }
        },
        computed: {
            isFolder: function () {
                return this.model.children &&
            this.model.children.length
        }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType: function () {
                if (!this.isFolder) {
                    Vue.set(this.model, 'children', [])
                this.addChild()
                this.open = true
                }
            },
            addChild: function () {
                this.model.children.push({
                    name: 'new stuff'
                })
            }
        }
    }
</script>
