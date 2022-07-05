<div class="container">
        <div class="header">
            <h1>Recipies App</h1>
        </div>
        <div class="main">
            <div class="main-left">
                <div class="main-left-top">
                    <h2>Recipies</h2>
                    <div class="main-left-top-buttons">
                        <button class="main-left-top-buttons-add" onclick="showAddRecipie()">Add</button>
                        <button class="main-left-top-buttons-edit" onclick="showEditRecipie()">Edit</button>
                        <button class="main-left-top-buttons-delete" onclick="showDeleteRecipie()">Delete</button>
                    </div>
                </div>
                <div class="main-left-bottom">
                    <div class="main-left-bottom-recipies">
                        <?php
                            $recipies = getRecipies();
                            foreach($recipies as $recipie) {
                                echo '<div class="main-left-bottom-recipies-recipie">';
                                echo '<div class="main-left-bottom-recipies-recipie-name">' . $recipie['name'] . '</div>';
                                echo '<div class="main-left-bottom-recipies-recipie-description">' . $recipie['description'] . '</div>';
                                echo '<div class="main-left-bottom-recipies-recipie-ingredients">';
                                $ingredients = getIngredients($recipie['id']);
                                foreach($ingredients as $ingredient) {
                                    echo '<div class="main-left-bottom-recipies-recipie-ingredients-ingredient">';
                                    echo '<div class="main-left-bottom-recipies-recipie-ingredients-ingredient-name">' . $ingredient['name'] . '</div>';
