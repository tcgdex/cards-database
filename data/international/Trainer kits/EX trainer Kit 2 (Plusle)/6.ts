import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [311],
	set: Set,

	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi"
	},

	illustrator: "Katsura Tabata",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 60,

	types: [
		"Lightning"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Pickup Power",
			'fr-fr': "Pouvoir ramassage"
		},
		effect: {
			'en-us': "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
			'fr-fr': "Choisissez une carte Énergie dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main."
		}
	}, {
		cost: [
			"Lightning",
			"Colorless"
		],
		name: {
			'en-us': "Rear Spark",
			'fr-fr': "Étincelle arrière"
		},
		effect: {
			'en-us': "Does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
		},
		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 277192,
				tcgplayer: 88166
			}
		},
	],

}

export default card
