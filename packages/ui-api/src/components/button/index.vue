<template>
    <Provider message="this the provider">
        <div slot-scope="{ result, upMessage, increment }">
            <some-button message="这个是example" :state="result" :increment="increment"></some-button>
            <h1>this is the uppercaseMessage {{upMessage}}</h1>
        </div>
    </Provider>
</template>

<script>
    import Provider from "./Provider";
    import buttonTemplate from './buttonTemplate'

    /*  3Party style wrapper
    *
    *
    * */

    export default {
        components: {
            Provider: Provider,
            someButton: buttonTemplate
        }
    };
</script>
