import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		669,
	],

	hp: 30,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Wish",
				fr: "Vœu",
				es: "Deseo",
				it: "Desiderio",
				pt: "Desejo",
				de: "Wunschtraum"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta y ponla en tu mano. Baraja las cartas de tu baraja después.",
				it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta qualsiasi e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Jogue uma moeda. Se sair cara, procure um card em seu baralho e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				de: "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 286347
	}
}

export default card
