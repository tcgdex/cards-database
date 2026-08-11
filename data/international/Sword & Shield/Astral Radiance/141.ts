import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Feather Ball",
		'fr-fr': "Plume Ball",
		'es-es': "Pluma Ball",
		'it-it': "Piuma Ball",
		'pt-br': "Bola de Penas",
		'de-de': "Federball"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Pokémon that has no Retreat Cost, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck un Pokémon sans Coût de Retraite, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 Pokémon que no tenga ningún Coste de Retirada, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo un Pokémon che non ha costo di ritirata, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por 1 Pokémon que não tenha custo de Recuo no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon, das keine Rückzugskosten hat, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658802,
				tcgplayer: 272393
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658802,
				tcgplayer: 272393
			}
		},
	],
}

export default card
