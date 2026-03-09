import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [326],
	set: Set,

	name: {
		en: "Grumpig",
		fr: "Groret"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink"
	},

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Snap Tail",
			fr: "Claquement de queue"
		},
		effect: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
		},
	}, {
		cost: [
			"Psychic",
			"Colorless"
		],
		name: {
			en: "Psypunch",
			fr: "Coup de poing psy"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 85968
	}
}

export default card
