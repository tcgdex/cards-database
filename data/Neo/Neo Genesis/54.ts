import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Chikorita",
		fr: "Germignon",
		de: "Endivie"
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
				fr: "Rugissement",
				de: "Heuler"
			},
			effect: {
				en: "If the Defending Pokémon attacks Chikorita during your opponent's next turn, any damage done to Chikorita is reduced by 10 (before applying Weakness and Resistance). (Benching or evolving either Pokémon ends this effect.)",
				fr: "Si le Pokémon Défenseur attaque Germignon pendant le prochain tour de votre adversaire, les dégâts infligés à Germignon sont réduits de 10 (avant application de la Faiblesse et de la Résistance). (Envoyer l'un des deux Pokémon sur son Banc ou le faire évoluer met fin à cet effet.)",
				de: "Falls das Verteidigende Pokémon Endivie während des nächsten Zuges deines Gegners angreift, werden alle Endivie zugefügten Schadenspunkte um 10 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden.(Kommt eines der beiden Pokémon auf die Bank oder entwickelt sich, endet diese Wirkung.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
				de: "Rasierblatt"
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
	},

	thirdParty: {
		cardmarket: 274453,
		tcgplayer: 84273
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		},
		{
			type: "normal",
			size: "jumbo",
			stamp: ["25th-celebration"]
		}
	]
}

export default card
