import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		es: "Luvdisc",
		it: "Luvdisc",
		pt: "Luvdisc",
		de: "Liebiskus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Mizue",

	attacks: [{
		name: {
			en: "Synchrodraw",
			fr: "Pioche Synchro",
			es: "Sincrorrobo",
			it: "Sincropesca",
			pt: "Synchrodraw",
			de: "Synchronzug"
		},

		effect: {
			en: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent’s hand.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
			es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
			it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
			pt: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent’s hand.",
			de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Water Gun",
			de: "Aquaknarre"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "Luvdisc makes its home in coral reefs in warm seas. It especially likes sleeping in the space between Corsola’s branches."
	},

	dexId: [370]
}

export default card