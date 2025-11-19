import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Togedemaru",
		fr: "Togedemaru",
		es: "Togedemaru",
		'es-mx': "Togedemaru",
		de: "Togedemaru",
		it: "Togedemaru",
		pt: "Togedemaru"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami",
			es: "Encontrar un Amigo",
			'es-mx': "Encontrar un Amigo",
			de: "Freunde finden",
			it: "Trovamico",
			pt: "Encontre um Amigo"
		},

		effect: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 Pokémon, muéstralo y ponlo en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Metal"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			'es-mx': "Mordisquear",
			de: "Nagen",
			it: "Rosicchiamento",
			pt: "Roída"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857679
	}
}

export default card