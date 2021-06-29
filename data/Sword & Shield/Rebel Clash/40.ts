import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		es: "Gyarados",
		it: "Gyarados",
		pt: "Gyarados",
		de: "Garados"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrack Down",
				fr: "Réduire en Poussière",
				es: "Desmoronar",
				it: "Abbattere",
				pt: "Desmoronar",
				de: "Niederschleudern"
			},

			damage: 90,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Storm",
				fr: "Forte Tempête",
				es: "Gran Tempestad",
				it: "Fortempesta",
				pt: "Tempestade Enorme",
				de: "Großer Sturm"
			},
			effect: {
				en: "Discard any Stadium in play.",
				fr: "Défaussez tout Stade en jeu.",
				es: "Descarta cualquier Estadio en juego.",
				it: "Scarta una carta Stadio qualsiasi in gioco.",
				pt: "Descarte qualquer Estádio em jogo.",
				de: "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	hp: 180,
	types: ["Water"],
	regulationMark: "D"
}

export default card
