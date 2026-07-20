LootJS.modifiers(event => {
    const fortune = LootEntry.of("minecraft:coal")
    .applyOreBonus("minecraft:fortune")
    .when(c => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")))

    const whiteSilkTouch = LootEntry.of("minecraft:coal_ore")
    .when(c => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))

    const blackSilkTouch = LootEntry.of("minecraft:deepslate_coal_ore")
    .when(c => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))

    event.addBlockModifier("minecraft:diamond_ore")
    .removeLoot("minecraft:diamond")
    .removeLoot("minecraft:diamond_ore")
    .addAlternativesLoot(fortune, whiteSilkTouch, "minecraft:coal")


    event.addBlockModifier("minecraft:deepslate_diamond_ore")
    .removeLoot("minecraft:diamond")
    .removeLoot("minecraft:deepslate_diamond_ore")
    .addAlternativesLoot(fortune, blackSilkTouch, "minecraft:coal")

})
