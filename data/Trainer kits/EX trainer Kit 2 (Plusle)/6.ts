import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [311],
	set: Set,

	name: {
		en: "Plusle",
		fr: "Posipi",
		de: "Plusle"
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
			en: "Pickup Power",
			fr: "Pouvoir ramassage",
			de: "Kraft aufsammeln"
		},
		effect: {
			en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
			fr: "Choisissez une carte Énergie dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
			de: "Durchsuche deinen Ablagestapel nach einer Energiekarte. Zeige sie deinem Gegner und nimm sie auf die Hand."
		}
	}, {
		cost: [
			"Lightning",
			"Colorless"
		],
		name: {
			en: "Rear Spark",
			fr: "Étincelle arrière",
			de: "Hinterer Funke"
		},
		effect: {
			en: "Does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			de: "Fügt 1 gegnerischen Pokémon auf der Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
