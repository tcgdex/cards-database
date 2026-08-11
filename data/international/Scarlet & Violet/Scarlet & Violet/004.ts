import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [286],
	set: Set,

	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'es-es': "Breloom",
		'it-it': "Breloom",
		'pt-br': "Breloom",
		'de-de': "Kapilz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Mach Cross",
			'fr-fr': "Passage Éclair",
			'es-es': "Puñetazo Mach",
			'it-it': "Incromach",
			'pt-br': "Cruzado Veloz",
			'de-de': "Tempo-Cross"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Ryuta Fuse",

	description: {
		'en-us': "It scatters poisonous spores and throws powerful punches while its foe is hampered by inhaled spores.",
	},

	thirdParty: {
        cardmarket: 702301,
        tcgplayer: 487833
    }
}

export default card