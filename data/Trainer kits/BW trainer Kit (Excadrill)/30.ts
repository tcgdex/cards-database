import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "5ban Graphics",
	stage: "Stage1",

	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	hp: 110,

	types: [
		"Fighting"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier"
		},

		damage: 30
	}, {
		cost: [
			"Fighting",
			"Fighting",
			"Fighting"
		],
		name: {
			en: "Drill Run",
			fr: "Tunnelier"
		},
		effect: {
			en: "Discard an Energy attached to the Defending Pokémon.",
			fr: "Défaussez une Énergie attachée au Pokémon Défenseur."
		},
		damage: 80,
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	resistances: [{
		type: "Lightning",
		value: "-20"
	}],

	description: {
		en: "It can help in tunnel construction. Its drill has evolved into steel strong enough to bore through iron plates."
	},

	retreat: 2,
}

export default card
