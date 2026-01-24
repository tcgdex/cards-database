import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [381],
	set: Set,

	name: {
		en: "Latios",
		fr: "Latios"
	},

	illustrator: "Kyoko Koizumi",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 80,

	types: [
		"Colorless",
	],

	attacks: [{
		cost: [
			"Lightning",
			"Colorless"
		],
		name: {
			en: "Gather Energy",
			fr: "Rassemblement d'énergie"
		},
		effect: {
			en: "Flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie de base et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck."
		},
		damage: 20
	}, {
		cost: [
			"Lightning",
			"Lightning",
			"Colorless"
		],
		name: {
			en: "Dragon Claw",
			fr: "Griffe de dragon"
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
		tcgplayer: 86664
	}
}

export default card
