import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [694],
	set: Set,

	name: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'es-es': "Helioptile",
		'it-it': "Helioptile",
		'pt-br': "Helioptile",
		'de-de': "Eguana"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
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
	regulationMark: "F",


	description: {
		'en-us': "When spread, the frills on its head act like solar panels, generating the power behind this Pokémon's electric moves.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691766,
				tcgplayer: 478158
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691766,
				tcgplayer: 478158
			}
		},
	],
}

export default card
