function h1(v) {return "<h1>"+v+"</h1>"}
function h2(v) {return "<h2>"+v+"</h2>"}

var boss1  = {icon : "🔨", nm: "hammer"}
var boss2  = {icon : "🍄", nm: "shroom"}

var dagger  = {icon : "🗡️", nm: "dagger"}
var sword  = {icon : "⚔️", nm: "sword"}
var hunter = {icon : "🏹", nm: "hunter"}
var mind = {icon : "🧠", nm: "mind"}

var shield   = {icon : "🛡", nm: "shield"}
var cleric   = {icon : "☀️", nm: "cleric"}
var evade   = {icon : "🕵️‍", nm: "evade"}

var player = {icon : "*",   nm: "*"}

var categories = [boss1 , boss2, dagger, shield, sword, hunter, mind, cleric, player]

var deck =
  [
// BOSS 1
    { "name": "Boulder"
    , "tag": boss1
    , "text" :
      [ ""
      , h2("⚔️") + ": base + d4"
      , ""
      , [0,0,0,0,
         0,0,0,0,
         0,1,1,0,
         0,1,1,0
        ]
      ]
    }
    ,
    { "name": "Spear"
    , "tag": boss1
    , "text" :
      [ ""
      , "Charge"
      , h2("⚔️") + ": base + (move * 2)"
      , ""
      , [1,1,1,1,
         1,0,0,1,
         0,0,0,0,
         0,0,0,0
        ]
      ]
    },
    { "name": "Slash"
    , "tag": boss1
    , "text" :
      [ ""
      , "Charge"
      ,  h2("⚔️") + ": base + (move * 2)"
      , ""
      , [1,1,1,1,
         0,0,0,0,
         0,0,0,0,
         0,0,0,0
        ]
      ]
    },
    { "name": "Kick"
    , "tag": boss1
    , "text" :
      [ "Knockback 3"
      , [1,1,1,1,
         1,0,0,1,
         0,0,0,0,
         0,0,0,0
        ]
      , "Charge,"+ h2("⚔️") + ": base + (2*move)"
      , [0,1,1,0,
         0,1,1,0,
         0,0,0,0,
         0,0,0,0
        ]
      ]
    },
    { "name": "Defend"
    , "tag": boss1
    , "text" :
      [ ""
      , h2("⬆")
      , h2("🛡")+": base + d10"
      , ""
      , "--If received no damage--"
      , ""
      , h2("🛡")+": d10"
      ]
    },
    { "name": "Harpoon"
    , "tag": boss1
    , "text" :
      [ ""
      , h2("⚔️") + ": base + d4"
      , "Pull 3"
      , [0,0,0,0,
         0,0,0,0,
         1,0,0,1,
         1,0,0,1
        ]
      ]
    },
    { "name": "Dash"
    , "tag": boss1
    , "text" :
      [ ""
      , "Rotates CCW, "+h2("🔄")
      , ""
      , ""
      , "Stun "
      , [1,1,0,0,
         1,0,0,0,
         0,0,0,0,
         0,0,0,0
        ]
      ]
    },
    { "name": "Left Hook"
    , "tag": boss1
    , "text" :
      [ ""
      , "Rotates CW, "+h2("🔃")
      , ""
      ,  h2("⚔️") + "base + d6 "
      , [0,0,1,1,
         0,0,1,1,
         0,0,0,0,
         0,0,0,0
        ]
      ]
    },
    { "name": "Golf"
    , "tag": boss1
    , "text" :
      [ ""
      , h2("⚔️") + ": base"
      , "Knockback 3"
      , [1,1,1,1,
         0,0,0,0,
         0,0,0,0,
         0,0,0,0
        ]
      ]
    },
    { "name": "Hack"
    , "tag": boss1
    , "text" :
      [ ""
      , h2("⚔️") + ": base + d10"
      , [1,1,1,1,
         0,0,0,0,
         0,0,0,0,
         0,0,0,0
        ]
      ]
    },
    { "name": "**Roar**"
    , "tag": boss1
    , "text" :
      [ ""
      , "Add +1 to all future attacks"
      , ""
      , h2("🛡") + " d10"
      , ""
      , "Shuffle deck"
      ]
    },
    { "name": "Zap"
    , "tag": boss2
    , "text" :
      [ ""
      , "Target highest hit point player"
      , ""
      , "Takes d8 damage next four actions"
      , ""
      ]
    },
    { "name": "Multiply"
    , "tag": boss2
    , "text" :
      [ ""
      , "Each "+h2("🍄")+" plants a new "+h2("🍄")
      , ""
      ]
    },
    { "name": "Seeder"
    , "tag": boss2
    , "text" :
      [ ""
      , "Plant "+h2("🍄")-"at end of round"
      , ""
      , [2,0,0,2,
         0,0,0,0,
         0,0,0,0,
         2,0,0,2
        ]
      ]
    },
    { "name": "Sleep"
    , "tag": boss2
    , "text" :
      [ "", "",""
      , "Stuns all characters within range 1 of a "+h2("🍄")
      , ""
      ]
    },
    { "name": "Infect"
    , "tag": boss2
    , "text" :
      [ ""
      , "Random target"
      , ""
      ,  "Seed " + h2("🍄") + " where target stand next two actions"
      ]
    },
    { "name": "Stoner"
    , "tag": boss2
    , "text" :
      [ ""
      , h2("🍄") + " are invulnerable til next action"
      , ""
      ,  "Random target: d8 dmg"
      ]
    },
    { "name": "Root"
    , "tag": boss2
    , "text" :
      [ ""
      , "All characters have 25% risk of"
      , ""
      ,  "Being immobile next action"
      ,  ""
      ,  "d4"
      ]
    },
    { "name": "13 Clover"
    , "tag": boss2
    , "text" :
      [ ""
      , "All characters take d4 dmg and gains disadvantage next action"
      ]
    },
    // { "name": "Weeding out"
    // , "tag": boss2
    // , "text" :
    //   [ ""
    //   , "Rotates 180, "+h2("🔃")+h2("🔃")
    //   , ""
    //   ,  h2("⚔️") + "base + d6 "
    //   , [0,0,0,0,
    //      0,0,0,0,
    //      0,0,0,0,
    //      1,1,1,1
    //     ]
    //   ]
    // },
    { "name": "Harvest"
    , "tag": boss2
    , "text" :
      [ ""
      , "Gain d10 clericth per mushroom"
      , ""
      , "Remove all "+h2("🍄")
      , ""
      , "Plant new "+h2("🍄")+" for each removed"
      ]
    },
    { "name": "Reap"
    , "tag": boss2
    , "text" :
      [ ""
      , "Charge"
      , ""
      , "Consume all "+h2("🍄")+ " in path"
      ,""
      , h2("⚔️") + ": base + d4"
      , ""
      , [1,1,1,1,
         0,0,0,0,
         0,0,0,0,
         0,0,0,0
        ]
      ]
    },
    { "name": "**Fertilize**"
    , "tag": boss2
    , "text" :
      [ ""
      , "Grow all "+h2("🍄")+" an additional turn"
      , ""
      , "Shuffle deck"
      ]
    },
    // Mind
    { "name": "Basic Mind"
    , "tag": mind
    , "text" :
      [ ""
      , "Copy action of ally this turn"
      , ""
      , "Take action after ally as if you were them (for modifiers)"
      , ""
      ]
    },
    { "name": "Revive"
    , "tag": mind
    , "text" :
      [ ""
      , "Target ally may move card from discard pile to hand."
      , ""
      ]
    },
    // Rouge
    { "name": "Basic Dagger"
    , "tag": dagger
    , "text" :
      [ ""
      , h2("⚔️") + "d6 per combo"
      , ""
      , "-- or --"
      , ""
      , "Combine with move"
      , h2("⚔️") + "d2"
      ]
    },
    { "name": "Dash"
    , "tag": dagger
    , "text" :
      [ ""
      , "Combine with movement card"
      , ""
      , h2("⚔️") + "d4"
      ]
    },

    // { "name": "Evade Attack"
    // , "tag": dagger
    // , "text" :
    //   [ "Negate all dmg taken"
    //   , "Combine with other card"
    //   ]
    // },
    // { "name": "Shadow Step"
    // , "tag": dagger
    // , "text" :
    //   [ ""
    //   , "Move anywhere within range 3"
    //   ]
    // },
    // { "name": "Strip"
    // , "tag": dagger
    // , "text" :
    //   [ ""
    //   , "Remove all armor from melee target"
    //   , ""
    //   , "- or --"
    //   , ""
    //   , h2("⚔️") + "d4"
    //   ]
    // },
    // { "name": "Poison"
    // , "tag": dagger
    // , "text" :
    //   [ ""
    //   , h2("⚔️") + "d2"
    //   , ""
    //   , "Target receives double damage next turn"
    //   ]
    // },
    // { "name": "Fan"
    // , "tag": dagger
    // , "text" :
    //   [ ""
    //   , "2 damage to all characters within range 2"
    //   ]
    // },
    // { "name": "Shadow Evade"
    // , "tag": dagger
    // , "text" :
    //   [ ""
    //   , "Reduce damage taken by 75% until end of next round"
    //   , ""
    //   , "Other entities may occupy your space"
    //   ]
    // },
    // { "name": "Throwing Knife"
    // , "tag": dagger
    // , "text" :
    //   [ ""
    //   , h1("⬇️")
    //   , h2("🏹") + ": Range 2, Dmg d4"
    //   ]
    // },
    // { "name": "Stab"
    // , "tag": dagger
    // , "text" :
    //   [ ""
    //   , h1("⬆️")
    //   , h2("⚔️") + ": d4"
    //   ]
    // },
    // shield
    // { "name": "Armor Up"
    // , "tag": shield
    // , "text" :
    //   [ ""
    //   , h2("🛡") + " d10"
    //   ]
    // },

    { "name": "Basic Sword"
    , "tag": sword
    , "text" :
      [ "", ""
      , "Combine with card"
      , ""
      , h2("⚔️") + " d4"
      ]
    },
    { "name": "Charge"
    , "tag": sword
    , "text" :
      [ ""
      , "Charge straight ahead"
      , ""
      , h2("⚔️") + " d4 per movement"
      ]
    },

    { "name": "Basic Shield"
    , "tag": shield
    , "text" :
      [ ""
      , h2("🛡") + " d6"
      ]
    },
    // { "name": "Roar"
    // , "tag": shield
    // , "text" :
    //   [ ""
    //   , "All allies deal 2 more dmg per attach next turn"
    //   ]
    // },
    // { "name": "Rush"
    // , "tag": shield
    // , "text" :
    //   [ ""
    //   , "Combine with move"
    //   , ""
    //   , "Triple move"
    //   ]
    // },
    { "name": "Dodge"
    , "tag": shield
    , "text" :
      [ ""
      , "Combine with movement, double"
      , ""
      , h2("🛡") + " d2"
      ]
    },
    // { "name": "Reflect"
    // , "tag": shield
    // , "text" :
    //   [ ""
    //   , "Return any damage received"
    //   ]
    // },
    // { "name": "Armor shatter"
    // , "tag": shield
    // , "text" :
    //   [ ""
    //   , h2("⚔️") + " #armor"
    //   , ""
    //   , "Remove all armor"
    //   ]
    // },
    // { "name": "Bandage"
    // , "tag": shield
    // , "text" :
    //   [ ""
    //   , "Receive double damage entire next round"
    //   , ""
    //   , h2("❤️") + " d8"
    //   ]
    // },
    // { "name": "Protect"
    // , "tag": shield
    // , "text" :
    //   [ ""
    //   , h2("🛡") + " d4"
    //   , ""
    //   , "Receive all damage instead of allies within range 2."
    //   ]
    // },
    // Hunter
    { "name": "Basic Hunter"
    , "tag": hunter
    , "text" :
      [ ""
      , h2("🏹") + " Range 4, d6 dmg"
      ]
    },
    // { "name": "Build Plateau"
    // , "tag": hunter
    // , "text" :
    //   [ ""
    //   , "Always hit target from this spot"
    //   ]
    // },
    { "name": "Take Aim"
    , "tag": hunter
    , "text" :
      [ "","",""
      , "3x dmg on next action"
      ]
    },
    // { "name": "Multi Shot"
    // , "tag": hunter
    // , "text" :
    //   [ "",
    //     "Combine with any number of movement"
    //    ,"For each, in that direction"
    //    , h2("🏹") + " Range 4, d6 dmg"
    //   ]
    // },
    // { "name": "Stun Trap"
    // , "tag": hunter
    // , "text" :
    //   [ "",
    //     "Place a trap on an adjacent tile"
    //    , ""
    //    ,"Any character stepping on it is stunned for next action"
    //    , ""
    //    , "Card stays in place until trap is triggered"
    //   ]
    // },
    // { "name": "Short Shot"
    // , "tag": hunter
    // , "text" :
    //   [ "",
    //     "Move two spaces forward"
    //    , ""
    //    ,"After complete two moves"
    //    , ""
    //    , h2("🏹") + " Range 2, d4 dmg"
    //   ]
    // },
    // { "name": "Poison Arrow"
    // , "tag": hunter
    // , "text" :
    //   [ "",
    //     "Your next arrow infects d6 dmg at end of next 3 rounds"
    //    , ""
    //   ]
    // },
    // { "name": "Grappling Hook"
    // , "tag": hunter
    // , "text" :
    //   [ "",
    //     h2("🏹") + "Range 4"
    //    , ""
    //    , "Pull yourself to target/wall"
    //    , ""
    //    , "-- or --"
    //    , ""
    //    ,"Pull (small) target next to you"
    //    , ""
    //   ]
    // },
    // { "name": "Blunt Shot"
    // , "tag": hunter
    // , "text" :
    //   [ "",
    //     h2("🏹") + "Range 4, dmg 4"
    //    , ""
    //    ,"(small) Knockback 4"
    //    , ""
    //   ]
    // },
    // { "name": "Move 'n Shoot"
    // , "tag": hunter
    // , "text" :
    //   [ ""
    //    , "Combine with 2 moves"
    //    , ""
    //    , h2("🏹") + "Range 4, dmg d6"
    //    , ""
    //    ,""
    //    , ""
    //   ]
    // },
    // { "name": "Confuse"
    // , "tag": hunter
    // , "text" :
    //   [ "",
    //     "Range 4"
    //    , ""
    //    ,"Shuffle played cards, and replay two at random"
    //    , ""
    //   ]
    // },
    // clericer
    { "name": "Basic Sun Cleric"
    , "tag": cleric
    , "text" :
      [ "",
        "Summon ☀️ within range two.",
        "☀️ is immaterial"
       , ""
       ,"--- or ---"
       , ""
       , "Combine with movement to move ☀️"
       , ""
       , "Combine with any other card played as normal"
      ]
    },
    // { "name": "Teleport"
    // , "tag": cleric
    // , "text" :
    //   [ "",
    //     "Swap place with ☀️"
    //   ]
    // },
    // { "name": "Greater cleric"
    // , "tag": cleric
    // , "text" :
    //   [ "",
    //     "cleric d10"
    //   ]
    // },
    // { "name": "Alleviate"
    // , "tag": cleric
    // , "text" :
    //   [ "",
    //     "???"
    //   ]
    // },
    // { "name": "Aura: Armor"
    // , "tag": cleric
    // , "text" :
    //   [ "All allies in range 1 of ☀️",
    //     "Reduce damage taken by 1 ",
    //     "Stays in play"
    //   ]
    // },
    { "name": "Aura: Luck"
    , "tag": cleric
    , "text" :
      [ "All allies in range 1 of ☀️",
        "Roll with advantage  ",
        "Stays in play"
      ]
    },
    // { "name": "Chain cleric"
    // , "tag": cleric
    // , "text" :
    //   [ "All allies on row or column with ☀️", ""
    //   , "cleric d10"
    //   , "Remove any aura effect"
    //   ]
    // },
    // { "amount": 1
    // , "name": "Foresight"
    // , "tag": cleric
    // , "text" :
    //   [ "Draw 2 cards"
    //   ]
    // },
    // { "name": "Mind Control"
    // , "tag": cleric
    // , "text" :
    //   [ "Order boss next four cards"
    //   ]
    // },
    // { "name": "Sunbeams"
    // , "tag": cleric
    // , "text" :
    //   [ "Any target:"
    //   , ""
    //   , "cleric 2 in end of next 4 round"
    //   , ""
    //   , "--- or ---"
    //   , ""
    //   , "Deal d6 dmg in end of next 4 round"

    //   ]
    // },
    // { "name": "Sunburst"
    // , "tag": cleric
    // , "text" :
    //   [ "","","To a character in range 2 of ☀️",
    //     "d10 dmg"
    //   ]
    // },
    // { "name": "Lightning"
    // , "tag": cleric
    // , "text" :
    //   [ ""
    //   , h2("⚔️") + " d8"
    //   ]
    // },
    // Player Move
    { "amount": 4
    , "tag": player
    , "name": "Move Up"
    , "text" :
      [ ""
      , h1("⬆️")
      ]
    },
    { "amount": 4
    , "tag": player
    , "name": "Move Down"
    , "text" :
      [ ""
      , h1("⬇️")
      ]
    },
    { "amount": 4
    , "tag": player
    , "name": "Move Left"
    , "text" :
      [ ""
      , h1("⬅️")
      ]
    },
    { "amount": 4
    , "tag": player
    , "name": "Move Right"
    , "text" :
      [ ""
      , h1("➡️")
      ]
    },
    { "amount": 4
    , "tag": player
    , "name": "Red Gem"
    , "text" :
      [ ""
      , "Red Gem"
      ]
    },
    { "amount": 4
    , "tag": player
    , "name": "Blue Gem"
    , "text" :
      [ ""
      , "Blue Gem"
      ]
    },
    { "amount": 4
    , "tag": player
    , "name": "Green Gem"
    , "text" :
      [ ""
      , "Green Gem"
      ]
    },
    { "amount": 4
    , "tag": player
    , "name": "Purple Gem"
    , "text" :
      [ ""
      , "Purple Gem"
      ]
    },
  ]

