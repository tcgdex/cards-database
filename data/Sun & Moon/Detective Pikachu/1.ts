import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		es: "Bulbasaur",
		it: "Bulbasaur",
		pt: "Bulbasaur",
		de: "Bisasam"
	},

	illustrator: "MPC Film",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		1,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
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
				en: "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez un Pokémon Grass dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Pokémon Grass, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un Pokémon Grass, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 Pokémon Grass no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Grass-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
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
		cardmarket: 370766
	}
}

export default card
