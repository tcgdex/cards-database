import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [453],
	set: Set,

	name: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Whap Down",
			'fr-fr': "Assommer",
			'es-es': "Zurrar",
			'it-it': "Bastonata",
			'pt-br': "Golpe Ligeiro",
			'de-de': "Verdreschen"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Shiburingaru",

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
	},

	thirdParty: {
        cardmarket: 702425,
        tcgplayer: 487056
    }
}

export default card