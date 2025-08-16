import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
		es: "Blaziken",
		it: "Blaziken",
		pt: "Blaziken",
		de: "Lohgock"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
		es: "Combusken",
		it: "Combusken",
		pt: "Combusken",
		de: "Jungglut"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Spreading Flames",
				fr: "Flammes Rampantes",
				es: "Llamas Dispersas",
				it: "Spargifiamma",
				pt: "Chamas Alastrantes",
				de: "Flammenausbreitung"
			},
			effect: {
				en: "Attach 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
				fr: "Attachez 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
				es: "Une 3 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
				it: "Assegna a piacimento ai tuoi Pokémon tre carte Energia Fire dalla tua pila degli scarti.",
				pt: "Ligue 3 cards de Energia Fire da sua pilha de descarte a seus Pokémon do jeito que desejar.",
				de: "Lege 3 Fire-Energiekarten von deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Blow",
				fr: "Coup Explosif",
				es: "Golpe de Fuego",
				it: "Colpocalore",
				pt: "Golpe de Calor",
				de: "Hitzschlag"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 273559,
		tcgplayer: 95920
	}
}

export default card
