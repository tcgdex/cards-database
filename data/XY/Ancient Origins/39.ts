import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
		es: "Quagsire",
		it: "Quagsire",
		pt: "Quagsire",
		de: "Morlord"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
		es: "Wooper",
		it: "Wooper",
		pt: "Wooper",
		de: "Felino"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				es: "Chapoteo Ondulante",
				it: "Schizzi d'Onda",
				pt: "Onda Borrifante",
				de: "Wellenplatscher"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Landslide",
				fr: "Glissement de Terrain",
				es: "Desprendimiento",
				it: "Sconquasso",
				pt: "Deslizamento de Terra",
				de: "Erdlawine"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "Os danos deste ataque não são afetados por Resistência.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
