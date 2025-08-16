import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Deerling",
		fr: "Vivaldaim",
		es: "Deerling",
		it: "Deerling",
		pt: "Deerling",
		de: "Sesokitz"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		585,
	],

	hp: 60,

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
				en: "Find a Friend",
				fr: "Trouver un Ami",
				es: "Encontrar un Amigo",
				it: "Trovamico",
				pt: "Encontre um Amigo",
				de: "Freunde finden"
			},
			effect: {
				en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho um Pokémon, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
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

	thirdParty: {
		cardmarket: 289834,
		tcgplayer: 117771
	}
}

export default card
