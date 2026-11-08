import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [418],
	set: Set,

	name: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée",
		'es-es': "Buizel",
		'it-it': "Buizel",
		'pt-br': "Buizel",
		'de-de': "Bamelin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Razor Fin",
			'fr-fr': "Aileron-Rasoir",
			'es-es': "Aleta Afilada",
			'it-it': "Pinnalama",
			'pt-br': "Barbatana Cortante",
			'de-de': "Rasierflosse"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Mizue",

	description: {
		'en-us': "It spins its two tails like a screw to propel itself through water. The tails also slice clinging seaweed.",
	},

	thirdParty: {
        cardmarket: 702341,
        tcgplayer: 487891
    }
}

export default card