// cat = category
// typ = type
// pok = pokemon
// stg = stage
// egy = gy_type
// trn = trainer_type
// abt = ity_type
// sfx = suffix
// rar = rarity

// later:
// ill = illustrator
//

const types = [
	'Colorless',
	'Darkness',
	'Dragon',
	'Fairy',
	'Metal',
	'Fighting',
	'Fire',
	'Grass',
	'Lightning',
	'Metal',
	'Psychic',
	'Water'
] as const

export type Type = typeof types[number]

const rarities = [
	'ACE SPEC Rare',
	'Amazing Rare',
	'Classic Collection',
	'Common',
	'Double rare',
	'Full Art Trainer',
	'Holo Rare',
	'Holo Rare V',
	'Holo Rare VMAX',
	'Holo Rare VSTAR',
	'Hyper rare',
	'Illustration rare',
	'LEGEND',
	'None',
	'Radiant Rare',
	'Rare',
	'Rare Holo',
	'Rare Holo LV.X',
	'Rare PRIME',
	'Secret Rare',
	'Shiny Ultra Rare',
	'Shiny rare',
	'Shiny rare V',
	'Shiny rare VMAX',
	'Special illustration rare',
	'Ultra Rare',
	'Uncommon',
	'One Diamond',
	'Two Diamond',
	'Three Diamond',
	'Four Diamond',
	'One Star',
	'Two Star',
	'Three Star',
	'Crown',

	'One Shiny',
	'Two Shiny',
]

export type Rarity = typeof rarities[number]
