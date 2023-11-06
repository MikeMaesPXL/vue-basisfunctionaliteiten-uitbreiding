<script>
    export default {
        props: [
            'index',
            'task'
        ]
    }
</script>

<template>
    <li>
        <p> {{ index + "." }}</p>
        <p> {{ "Name: " + task.name }} </p>
        <p> {{ "Label: " + task.label }} </p>
        <p> {{ "Priority: " + task.priority }} </p>
    </li>
</template>

<style scoped>
    .result {
    width: 50%;
    border: 1px solid #0F0F0F;
    border-radius: 5px;
    margin: 2rem auto;
    padding: 1rem;
    }

    .button__padding {
    padding: 5px;
    margin: 10px;
    }

    li {
    list-style: none;
    }

    input {
    margin-right: 15px;
    }
</style>