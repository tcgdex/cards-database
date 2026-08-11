import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [840],
	set: Set,

	name: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Find a Friend",
			'fr-fr': "Trouver un Ami",
			'es-es': "Encontrar un Amigo",
			'it-it': "Trovamico",
			'pt-br': "Encontre um Amigo",
			'de-de': "Freunde finden"
		},

		effect: {
			'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass", "Fire"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Applin lives inside an apple. When an Applin is separated from its apple, its body loses moisture and the Pokémon grows weak.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769300,
				tcgplayer: 550170
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769300,
				tcgplayer: 550170
			}
		},
	],

	illustrator: "Teeziro",

}

export default card