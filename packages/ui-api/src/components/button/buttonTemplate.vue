<template functional>
    <div>
    <div class="message">{{props.message}}</div>
    <div class="count text-purple-500">
            Count: {{ props.state.count }}
    </div>
        <button class="bg-blue-500
         hover:bg-blue-600
         text-white
         font-bold py-2 px-4 rounded"
                @click="props.increment">Increment</button>
    </div>
</template>
