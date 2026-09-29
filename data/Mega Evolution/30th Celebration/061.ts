import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has a small stomach. If it isn't constantly eating the seeds it keeps in its pockets, it will get hungry immediately."
	},

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		de: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		'es-mx': "Morpeko",
		pt: "Morpeko"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [877],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Select a Snack",
			fr: "Sélection de Friandise",
			de: "Snackwahl",
			es: "Elige tu Bocadito",
			it: "Sceglisnack",
			'es-mx': "Snack Selecto",
			pt: "Escolher Lanchinho"
		},

		effect: {
			en: "Discard the top 3 cards of your deck and put 1 of them into your hand.",
			fr: "Défaussez les 3 cartes du dessus de votre deck, puis ajoutez l'une d'entre elles à votre main.",
			de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel und nimm 1 von ihnen auf deine Hand.",
			es: "Descarta las 3 primeras cartas de tu baraja y pon 1 de ellas en tu mano.",
			it: "Scarta le prime tre carte del tuo mazzo e aggiungine una a quelle che hai in mano.",
			'es-mx': "Descarta las primeras 3 cartas de tu mazo y pon 1 de ellas en tu mano.",
			pt: "Descarte as 3 cartas de cima do seu baralho e coloque 1 delas na sua mão."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Slap",
			fr: "Gifle",
			de: "Hieb",
			es: "Bofetón",
			it: "Sberla",
			'es-mx': "Bofetón",
			pt: "Tapa"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907668,
				tcgplayer: 716460
			}
		}
	],
}

export default card
