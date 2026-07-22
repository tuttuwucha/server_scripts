ServerEvents.recipes(event =>{
    event.blasting('minecraft:magma_cream', 'minecraft:slime_ball').xp(0.35)

    event.recipes.createFilling('minecraft:netherrack',[
        'minecraft:cobblestone',
        Fluid.of('minecraft:lava',50)
    ])

    event.recipes.createSandpaperPolishing('minecraft:nether_wart', 'minecraft:netherrack')



    event.recipes.createSplashing([
        CreateItem.of('4x minecraft:quartz', 0.12)
    ], 'minecraft:soul_sand')



    // event.recipes.create.item_application('minecraft:soul_sand',[
    //     'minecraft:sand',
    //     'minecraft:rotten_flesh'
    // ])

    const SHROOMLIGHT_INGREDIENTS = [
        'minecraft:red_mushroom_block',
        'minecraft:brown_mushroom_block'
    ]
    SHROOMLIGHT_INGREDIENTS.forEach(block => {
        event.recipes.create.item_application('minecraft:shroomlight',[
        block,
        'minecraft:bone_meal'
        ])
    })

    event.recipes.shaped(
        Item.of('create:blaze_burner'),
        [
            'BMB',
            'PEP',
            '   '
        ],
        {
            E: 'create:empty_blaze_burner',
            B: 'minecraft:blaze_rod',
            P: 'minecraft:blaze_powder',
            M: 'minecraft:magma_block'
        }
    )

    event.recipes.createMixing('8x createbigcannons:nethersteel_ingot',[
        'minecraft:diamond',
        '4x tfmg:steel_ingot'
    ]).superheated()

    event.recipes.createMixing('8x createbigcannons:nethersteel_ingot',[
        'minecraft:diamond',
        '8x tfmg:cast_iron_ingot'
    ]).superheated()

    const MYCELIUM_INGREDIENTS = [
        'minecraft:red_mushroom',
        'minecraft:brown_mushroom'
    ]
    MYCELIUM_INGREDIENTS.forEach(block => {
        event.recipes.createMixing('minecraft:mycelium',[
        'minecraft:dirt',
        '4x ' + block
        ])
    })

    event.recipes.shaped(
        Item.of('minecraft:sponge'),
        [
            'YYY',
            'TST',
            'WWW'
        ],
        {
            Y: 'minecraft:yellow_dye',
            T: 'minecraft:string',
            S: 'minecraft:slime_ball',
            W: 'minecraft:wheat'
        }
    )

    event.recipes.shaped(
        Item.of('minecraft:shulker_shell'),
        [
            'MSM',
            'SBS',
            '   '
        ],
        {
            S: 'create:sturdy_sheet',
            B: 'minecraft:slime_ball',
            M: 'minecraft:magenta_dye'
        }
    )

    event.recipes.shaped(
        Item.of('chunkloaders:ultimate_chunk_loader'),
        [
            'RSR',
            'ELE',
            'RSR'
        ],
        {
            R: 'minecraft:redstone',
            E: 'minecraft:ender_eye',
            S: 'create:sturdy_sheet',
            L: 'chunkloaders:advanced_chunk_loader'
        }
    )

    event.recipes.shaped(
        Item.of('create_dragons_plus:blaze_upgrade_smithing_template'),
                         [
                            'BCB',
                            'BNB',
                            'BBB'
                         ],
                         {
                             B: 'minecraft:blaze_rod',
                             N: 'minecraft:netherrack',
                             C: 'minecraft:crafting_table'
                         }
    )

    event.recipes.create.crushing(['create:cinder_flour',CreateItem.of('create:cinder_flour', 0.5), CreateItem.of('tfmg:sulfur_dust', 0.3)], 'minecraft:netherrack')


//     ПРИМЕР ПОСЛЕДОВАТЕЛЬНОЙ СБОРКИ:
    // event.recipes.create.sequenced_assembly(
    //     // Outputs:
    //     [
    //         CreateItem.of('create:precision_mechanism', 0.13), // Main output, will appear in JEI as the result
    //                                         CreateItem.of('create:golden_sheet', 0.008), // Rest of these items will be considered Random Salvage
    //                                         CreateItem.of('create:andesite_alloy', 0.008),
    //                                         CreateItem.of('create:cogwheel', 0.005),
    //                                         CreateItem.of('create:shaft', 0.002),
    //                                         CreateItem.of('create:crushed_raw_gold', 0.002),
    //                                         CreateItem.of('2x minecraft:gold_nugget', 0.002),
    //                                         CreateItem.of('minecraft:iron_ingot', 0.001),
    //                                         CreateItem.of('minecraft:clock', 0.001)
    //     ],
    //     // Input:
    //     'create:golden_sheet',
    //     // Sequence:
    //     [
    //         // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
    //         // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
    //         event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel',]),
    //                                         event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel',]),
    //                                         event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget',]),
    //     ]
    // )
    // .transitionalItem('create:incomplete_precision_mechanism') // Set the transitional item
    // .loops(5) // Set the number of loops


    // event.recipes.create.sequenced_assembly(
    //     [
    //     CreateItem.of('minecraft:blaze_rod')
    //     ],
    //     'minecraft:coal_block',
    //     [
    //         event.recipes.create.pressing('minecraft:coal_block','minecraft:coal_block'),
    //         event.recipes.create.pressing('minecraft:coal_block','minecraft:coal_block'),
    //         event.recipes.create.filling('minecraft:coal_block',['minecraft:coal_block', Fluid.of('minecraft:lava', 500)]),
    //         event.recipes.create.filling('minecraft:coal_block',['minecraft:coal_block', Fluid.of('minecraft:lava', 500)])
    //     ]
    // )
    // .transitionalItem('minecraft:coal_block')

    event.remove({id: 'minecraft:magma_cream'})

    event.remove({id: 'create:crushing/nether_gold_ore'})
    event.remove({id: 'create:crushing/nether_quartz_ore'})
    event.remove({id: 'createaddition:mixing/netherrack'})
    event.remove({id: 'createoreexcavation:drilling/netherite'})

    event.remove({id: 'createoreexcavation:drilling/hardened_diamond'})

    event.remove({id: 'create:splashing/soul_sand'})

    event.remove({id: 'create:splashing/red_sand'})

    event.remove({id: 'create:crushing/tuff_recycling'})
    // event.remove({id: 'create:crushing/tuff'})

    // event.remove({id: 'tfmg:crafting/kinetics/steel_helmet'})
    // event.remove({id: 'tfmg:crafting/kinetics/steel_chestplate'})
    // event.remove({id: 'tfmg:crafting/kinetics/steel_leggings'})
    // event.remove({id: 'tfmg:crafting/kinetics/steel_boots'})

    // event.remove({id: 'tfmg:crafting/materials/steel_shovel'})
    // event.remove({id: 'tfmg:crafting/materials/steel_pickaxe'})
    // event.remove({id: 'tfmg:crafting/materials/steel_hoe'})
    // event.remove({id: 'tfmg:crafting/materials/steel_axe'})
    // event.remove({id: 'tfmg:crafting/materials/steel_sword'})
    // event.remove({id: 'tfmg:crafting/materials/lithium_blade'})

    // event.remove({id: 'createbigcannons:steel_ingot_from_nuggets'})
    // event.remove({id: 'createbigcannons:steel_ingot_from_block'})
    // event.remove({id: 'createbigcannons:mixing/alloy_steel'})
    // event.remove({id: 'createbigcannons:compacting/forge_steel_ingot'})
    //
    // event.remove({id: 'createbigcannons:steel_block'})
    // event.remove({id: 'createbigcannons:compacting/forge_steel_block'})
    //
    // event.remove({id: 'createbigcannons:melting/melt_steel_block'})
    // event.remove({id: 'createbigcannons:melting/melt_steel_ingot'})
    // event.remove({id: 'createbigcannons:melting/melt_steel_nugget'})
    //
    // event.remove({id: 'createbigcannons:compacting/forge_steel_nugget'})
    // event.remove({id: 'createbigcannons:steel_scrap'})
    //
    // event.remove({id: 'createbigcannons:mixing/alloy_nethersteel_steel'})
    // event.remove({id: 'createbigcannons:mixing/alloy_nethersteel_cast_iron'})
    //
    // event.remove({id: 'createbigcannons:compacting/iron_to_cast_iron_block'})

    event.remove({id: 'minecraft:netherite_drill_smithing'})

    event.remove({id: 'tfmg:copper_wire_from_ingots_copper_stonecutting'})

    event.remove({id: 'createcasing:sequenced_assembly/chorium_ingot'})

    event.remove({id: 'chunkloaders:ultimate_chunk_loader'})

    event.remove({id: 'create_netherless:blaze_burner_recipe_from_craft'})

    event.remove({id: 'create:crushing/netherrack'})

})

