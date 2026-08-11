import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [974],
	set: Set,

	name: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Icicle",
			'fr-fr': "Concrétion Glacée",
			'es-es': "Témpano",
			'it-it': "Stalattite",
			'pt-br': "Pingente de Gelo",
			'de-de': "Eiszapfen"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Sharp Fin",
			'fr-fr': "Aileron Aiguisé",
			'es-es': "Cortaleta",
			'it-it': "Pinnaffilata",
			'pt-br': "Barbatana Afiada",
			'de-de': "Schneidige Flosse"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "It lives in frigid regions in pods of five or so individuals. It loves the minerals found in snow and ice.",
	},

	thirdParty: {
        cardmarket: 702354,
        tcgplayer: 487910
    }
}

export default card