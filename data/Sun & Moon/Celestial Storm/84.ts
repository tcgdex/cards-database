import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
		es: "Rattata de Alola",
		it: "Rattata di Alola",
		pt: "Rattata de Alola",
		de: "Alola-Rattfratz"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Call for the Boss",
				fr: "Appel au Boss",
				es: "Llamar al Jefe",
				it: "Chiama il Boss",
				pt: "Chamar o Chefão",
				de: "Ruf den Boss"
			},
			effect: {
				en: "Search your deck for Alolan Raticate or Alolan Raticate-GX, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez un Rattatac d’Alola ou un Rattatac d’Alola-GX dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Raticate de Alola o 1 Raticate de Alola-GX, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un Raticate di Alola o un Raticate di Alola-GX, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por Raticate de Alola ou Raticate de Alola-GX no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach Alola-Rattikarl oder Alola-Rattikarl-GX, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361329
	}
}

export default card
