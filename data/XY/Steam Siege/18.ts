import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		es: "Chimchar",
		it: "Chimchar",
		pt: "Chimchar",
		de: "Panflam"
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		390,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				es: "Ascuas",
				it: "Braciere",
				pt: "Brasa",
				de: "Glut"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c’est pile, défaussez une Énergie Fire attachée à ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cruz, descarta 1 Energía Fire unida a este Pokémon.",
				it: "Lancia una moneta. Se esce croce, scarta un’Energia Fire assegnata a questo Pokémon.",
				pt: "Jogue uma moeda. Se sair coroa, descarte uma Energia Fire ligada a este Pokémon.",
				de: "Wirf 1 Münze. Lege bei „Zahl“ 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
