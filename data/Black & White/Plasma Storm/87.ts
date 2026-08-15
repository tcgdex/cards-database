import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		it: "Skarmory",
		pt: "Skarmory",
		de: "Panzaeron"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cargo Jet",
				fr: "Aérocargo",
				de: "Frachtflugzeug"
			},
			effect: {
				en: "Discard a Team Plasma card from your hand. If you do, draw 3 cards.",
				fr: "Défaussez une carte de la Team Plasma de votre main. Dans ce cas, piochez 3 cartes.",
				de: "Lege 1 Team Plasma-Karte von deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Wing",
				fr: "Aile d'Acier",
				de: "Stahlflügel"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its heavy-looking iron body is actually thin and light, so it can fly at speeds over 180 mph.",
		de: "Sein stählerner Körper ist dünner und leichter, als er wirkt und erlaubt eine Fluggeschwindigkeit von bis zu 300 km/h."
	},

	thirdParty: {
		cardmarket: 280827,
		tcgplayer: 89246
	}
}

export default card
