import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		es: "Hawlucha",
		it: "Hawlucha",
		pt: "Hawlucha",
		de: "Resladero"
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		701,
	],
	hp: 80,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
				es: "Patada Salto Alta",
				it: "Calcinvolo",
				pt: "Chute de Pulo Alto",
				de: "Turmkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Skyward Kick",
				fr: "Coup d'Pied Aérien",
				es: "Patada Cielo",
				it: "Calcinalto",
				pt: "Chute para o Céu",
				de: "Hochschnellender Kick"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "Os danos deste ataque não são afetados por Resistência.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
