import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [522],
	set: Set,

	name: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'es-es': "Blitzle",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'de-de': "Elezeba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Add On",
			'fr-fr': "Ajout",
			'es-es': "Sumar",
			'it-it': "Supplemento",
			'pt-br': "Adicionar",
			'de-de': "Hinzufügen"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794341,
				tcgplayer: 589876
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794341,
				tcgplayer: 589876
			}
		},
	],

	illustrator: "kamonabe",
	
}

export default card
