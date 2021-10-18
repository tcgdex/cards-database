import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Zoroark)'

const card: Card = {
	set: Set,

	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "Bonds between these Pokémon are very strong. It protects the safety of its pack by tricking its opponents."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fury Swipes"
		},

		damage: "20×",

		effect: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads."
		}
	}, {
		name: {
			en: "Night Daze"
		},

		damage: 80
	}],

	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		de: "Zorua"
	},

	retreat: 2,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}]
}

export default card