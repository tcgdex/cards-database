import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Chikorita",
		fr: "Germignon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growl",
				fr: "Rugissement"
			},
			effect: {
				en: "If the Defending Pokémon attacks Chikorita during your opponent's next turn, any damage done to Chikorita is reduced by 10 (before applying Weakness and Resistance). (Benching or evolving either Pokémon ends this effect.)",
				fr: "Si le Pokémon Défenseur attaque Germignon pendant le prochain tour de votre adversaire, les dégâts infligés à Germignon sont réduits de 10 (avant application de la Faiblesse et de la Résistance). (Envoyer l'un des deux Pokémon sur son Banc ou le faire évoluer met fin à cet effet.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Ses feuilles au parfum agréable lui permettent de vérifier l'humidité et la température."
	}
}

export default card
