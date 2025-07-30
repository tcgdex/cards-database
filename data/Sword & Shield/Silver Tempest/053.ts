import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Overhaul",
			fr: "Refonte",
			es: "Reparación",
			it: "Revisione",
			pt: "Reconstrução",
			de: "Überholung"
		},

		effect: {
			en: "Shuffle your hand into your deck. Then, draw 6 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
			it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
			pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas.",
			de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
			es: "Rayo Mach",
			it: "Fulmine Mach",
			pt: "Raio Supersônico",
			de: "Flotter Sprung"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682100
	}
}

export default card