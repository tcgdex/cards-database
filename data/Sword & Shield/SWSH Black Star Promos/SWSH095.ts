import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "First Step",
			fr: "Premier Pas",
			es: "Primer Paso",
			it: "Primo Passo",
			pt: "First Step",
			de: "Erster Schritt"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Draw a card.",
			de: "Ziehe 1 Karte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			es: "Coletón",
			it: "Codabotta",
			pt: "Tail Whap",
			de: "Schweifvertrimmer"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "It has the ability to alter the composition of its body to suit its surrounding environment."
	},

	stage: "Basic",
	dexId: [133],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card