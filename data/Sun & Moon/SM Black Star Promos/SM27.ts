import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Turtonator",
		fr: "Boumata",
		es: "Turtonator",
		it: "Turtonator",
		pt: "Turtonator",
		de: "Tortunator"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		776,
	],
	hp: 130,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Cloak",
				fr: "Manteau de Feu",
				es: "Manto Ígneo",
				it: "Radunafuoco",
				pt: "Manto de Chamas",
				de: "Flammenumhang"
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				pt: "Ligue um card de Energia Fire da sua pilha de descarte a este Pokémon.",
				de: "Nimm 1 Fire-Energiekarte von deinem Ablagestapel und lege sie an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
				es: "Explosión de Calor",
				it: "Caldobomba",
				pt: "Raio de Calor",
				de: "Hitzestoß"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
