<template>
    <div
      class="drop-zone"
      @drop="onDrop($event)"
      @dragover.prevent
    >
      <template v-for="item in itemsByOrder" :key="item.key">
          <div 
              class="drag-el"
              :draggable="true" 
              @dragstart="onDragstart($event, item)"
              @dragenter="onDragenter($event, item)"
              
            >
              <div class="block">
                {{ item.title }}
              </div>
              <CInput></CInput>
              <DBUtton><img src="../../assets/img/close.png"></DBUtton>
              <DBUtton><img src="../../assets/img/density.png"></DBUtton>
          </div>
      </template>    
    </div>
</template>

<script>
import DBUtton from './DBUtton.vue';
import CInput from './CInput.vue';


export default {
  components: {
    CInput,
    DBUtton,
    
},
  data() {
      return {
          items: [
              {
                  order: 0,
                  title: 'tele2_number',
                  key: 1,
              },
              {
                  order: 1,
                  title: 'sip_number',
                  key: 2,
              },
              {
                  order: 2,
                  title: 'sip_number',
                  key: 3,
              },
          ],
          swapWith: null,
      }
  },
  computed: {
      itemsByOrder() {
          let result = [];
          for(let i = 0; i < this.items.length; i++) {
              for (const item of this.items) {
                  if (item.order == i) {
                      result.push(item);
                      break;
                  }
              }
          }
          return result
      }
  },
  methods: {
      onDrag() {
          console.log("onDrag");
      },
      onDragstart(e, item) {
          e.dataTransfer.dropEffect = 'move'
          e.dataTransfer.effectAllowed = 'move'
          e.dataTransfer.setData('firstItem', item.order)

      },
      onDragenter(e, item) {
          this.swapWith = item.order;
      },
      onDrop(e) {
          let firstItemId = +e.dataTransfer.getData("firstItem");
          let secondItemId = +this.swapWith;
          console.log(firstItemId);
          console.log(secondItemId);
          console.log("--------------")
          if (firstItemId !== secondItemId) {
              for(let i = 0; i < this.items.length; i++) {
                  
                  if(this.items[i].order == firstItemId) {
                      this.items[i].order = secondItemId
                  } else if (this.items[i].order == secondItemId) {
                      this.items[i].order = firstItemId
                  }
              }
          }
          this.swapWith = null;
      }
  },
}
</script>

<style scoped>
.drop-zone {
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-bottom: 10px;

}

.block{
  margin: 0;
  width: 284px;
  height: 45px;
  background: rgba(107, 119, 233, 0.22);
  display: flex;
  align-items: center;
  padding: 12px;
}
</style>