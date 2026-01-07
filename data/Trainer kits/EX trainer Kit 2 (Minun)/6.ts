import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [312],
	set: Set,

	name: {
		en: "Minun",
		fr: "Negapi"
	},

	illustrator: "Katsura Tabata",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Lightning",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Drawup Power",
			fr: "Pouvoir bloquant"
		},
		effect: {
			en: "Search your deck for an Energy card, show it to your opponent, and put into your hand. Shuffle your deck afterward.",
			fr: "Choisissez une carte Énergie dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck."
		}
	}, {
		cost: [
			"Lightning",
			"Colorless"
		],
		name: {
			en: "Front Spark",
			fr: "Étincelle avant"
		},
		effect: {
			en: "Does 10 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
		},
		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	retreat: 1,
}

export default card
