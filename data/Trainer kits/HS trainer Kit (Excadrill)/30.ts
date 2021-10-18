import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Excadrill)'

const card: Card = {
	set: Set,

	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "It can help in tunnel construction. Its drill has evolved into steel strong enough to bore through iron plates."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Metal Claw"
		},

		damage: 30
	}, {
		name: {
			en: "Drill Run"
		},

		damage: 80,

		effect: {
			en: "Discard an Energy attached to the Defending Pokémon."
		}
	}],

	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	retreat: 2,

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	resistances: [{
		type: "Lightning",
		value: "-20"
	}]
}

export default card