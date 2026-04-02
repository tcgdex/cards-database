import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		'es-mx': "Rowlet",
		de: "Bauz",
		it: "Rowlet",
		pt: "Rowlet"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			'es-mx': "Tacleada",
			de: "Tackle",
			it: "Azione",
			pt: "Investida"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684368,
		cardmarket: 877507
	}
}

export default card
