import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
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
				fr: "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
				de: "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Mane",
				fr: "Crinière de Feu",
				es: "Crin de Fuego",
				it: "Criniera di Fuoco",
				pt: "Crina de Fogo",
				de: "Flammenmähne"
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

	retreat: 1,
	regulationMark: "D"
}

export default card
