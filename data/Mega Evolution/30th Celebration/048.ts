import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Store Up",
			fr: "Réserves",
			de: "Aufstocken",
			es: "Acopiar",
			it: "Fare Scorta",
			'es-mx': "Acopiar"
		},

		effect: {
			en: "Put up to 2 Basic Energy cards from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 cartes Énergie de base de votre pile de défausse à votre main.",
			de: "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand.",
			es: "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'es-mx': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907655,
				tcgplayer: 716316
			}
		}
	],
}

export default card