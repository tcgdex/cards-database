import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [179],
	set: Set,

	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'it-it': "Mareep",
		'pt-br': "Mareep",
		'de-de': "Voltilamm"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Lightning Ball",
			'fr-fr': "Boule Éclair",
			'es-es': "Bola Relámpago",
			'it-it': "Fulminpalla",
			'pt-br': "Bola de Raios",
			'de-de': "Kugelblitz"
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
	illustrator: "Orca",
	variants: [
		{
			type: "normal"
		}
	],
}

export default card
