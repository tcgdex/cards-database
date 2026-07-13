import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [286],
	set: Set,

	name: {
		en: "Breloom",
		fr: "Chapignon",
		es: "Breloom",
		it: "Breloom",
		pt: "Breloom",
		de: "Kapilz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Mach Cross",
			fr: "Passage Éclair",
			es: "Puñetazo Mach",
			it: "Incromach",
			pt: "Cruzado Veloz",
			de: "Tempo-Cross"
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
			type: "normal",
			size: "standard"
		},
		{
			type: "reverse",
			size: "standard"
		}
	],

	illustrator: "Ryuta Fuse",

	description: {
		en: "It scatters poisonous spores and throws powerful punches while its foe is hampered by inhaled spores.",
	},

	thirdParty: {
        cardmarket: 702301,
        tcgplayer: 487833
    }
}

export default card