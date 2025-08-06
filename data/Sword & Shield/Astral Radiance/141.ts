import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Feather Ball",
		fr: "Plume Ball",
		es: "Pluma Ball",
		it: "Piuma Ball",
		pt: "Bola de Penas",
		de: "Federball"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Search your deck for a Pokémon that has no Retreat Cost, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck un Pokémon sans Coût de Retraite, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja 1 Pokémon que no tenga ningún Coste de Retirada, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo un Pokémon che non ha costo di ritirata, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por 1 Pokémon que não tenha custo de Recuo no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach 1 Pokémon, das keine Rückzugskosten hat, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658802,
		tcgplayer: 272393
	}
}

export default card