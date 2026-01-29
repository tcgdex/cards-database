import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [571],
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

	stage: "Stage1",

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

	attacks: [{
		cost: [
			"Darkness"
		],
		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe"
		},
		effect: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face."
		},
		damage: "20×",
	}, {
		cost: [
			"Darkness",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Night Daze",
			fr: "Explonuit"
		},
		damage: 80
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	description: {
		en: "Bonds between these Pokémon are very strong. It protects the safety of its pack by tricking its opponents."
	},

	retreat: 2,
}

export default card
