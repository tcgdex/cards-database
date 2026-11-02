import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Binacle",
		fr: "Opermine",
		es: "Binacle",
		'es-mx': "Binacle",
		de: "Bithora",
		it: "Binacle",
		pt: "Binacle"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [688],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Double Draw",
			fr: "Double Pioche",
			es: "Roba Doble",
			it: "Pescata Doppia",
			pt: "Compra Dupla",
			de: "Zweifachzug"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},

	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 30

	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 898177,
				tcgplayer: 706131
			}
		},
	],
}

export default card
