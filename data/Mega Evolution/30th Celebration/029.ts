import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "James Turner",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami",
			de: "Freunde finden",
			es: "Encontrar un Amigo",
			it: "Trovamico",
			'es-mx': "Encontrar un Amigo"
		},

		effect: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'es-mx': "Busca en tu mazo 1 Pokémon, muéstralo y ponlo en tu mano. Después, baraja tu mazo."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card