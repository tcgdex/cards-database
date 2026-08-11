import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "First Step",
			'fr-fr': "Premier Pas",
			'es-es': "Primer Paso",
			'it-it': "Primo Passo",
			'pt-br': "Primeiro Passo",
			'de-de': "Erster Schritt"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre 1 carta.",
			'de-de': "Ziehe 1 Karte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir",
			'es-es': "Coletón",
			'it-it': "Codabotta",
			'pt-br': "Surra de Cauda",
			'de-de': "Schweifvertrimmer"
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
		'en-us': "It has the ability to alter the composition of its body to suit its surrounding environment."
	},

	stage: "Basic",
	dexId: [133],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 491204
	}
}

export default card
