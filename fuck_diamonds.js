LootJS.modifiers(event => {
    event.addBlockModifier("minecraft:diamond_ore")
    .replaceLoot("minecraft:diamond", "minecraft:coal")


    event.addBlockModifier("minecraft:deepslate_diamond_ore")
    .replaceLoot("minecraft:diamond", "minecraft:coal")
})
