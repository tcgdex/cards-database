import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc",
		es: "Shuckle",
		it: "Shuckle",
		pt: "Shuckle",
		de: "Pottrott"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		213,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fresh Squeezed",
				fr: "Fraîchement Pressé",
				es: "Recién Exprimido",
				it: "Spremuta Fresca",
				pt: "Feito na Hora",
				de: "Frisch gepresst"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 3 basic Energy cards and discard them. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher jusqu’à 3 cartes Énergie de base dans votre deck et les défausser. Mélangez ensuite votre deck.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja hasta 3 cartas de Energía Básica y descartarlas. Después, baraja las cartas de tu baraja.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo fino a tre carte Energia base e scartarle. Poi rimischia le carte del tuo mazzo.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode procurar por até 3 cartas de Energia básica no seu baralho e descartá-las. Em seguida, embaralhe o seu baralho.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach bis zu 3 Basis-Energiekarten durchsuchen und sie auf deinen Ablagestapel legen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Energy Drink",
				fr: "Boisson Énergisante",
				es: "Bebida Energética",
				it: "Bevanda Energetica",
				pt: "Bebida Energética",
				de: "Energiegetränk"
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to your Pokémon in any way you like.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
				es: "Une 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees.",
				it: "Assegna a piacimento ai tuoi Pokémon due carte Energia base dalla tua pila degli scarti.",
				pt: "Ligue 2 cartas de Energia básica da sua pilha de descarte aos seus Pokémon como desejar.",
				de: "Lege 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
