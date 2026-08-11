import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [90],
	set: Set,

	name: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas",
		'es-es': "Shellder",
		'it-it': "Shellder",
		'pt-br': "Shellder",
		'de-de': "Muschas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "kawayoo",

	description: {
		'en-us': "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Tongue Slap",
			'fr-fr': "Gros Coup de Langue",
			'de-de': "Zungenschelle",
			'es-es': "Bofetón Lengua",
			'pt-br': "Tapa de Língua",
			'it-it': "Linguasberla"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'de-de': "Wellenplatscher",
			'es-es': "Chapoteo Ondulante",
			'pt-br': "Onda Borrifante",
			'it-it': "Schizzi d'Onda"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582184,
				tcgplayer: 253181
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582184,
				tcgplayer: 253181
			}
		},
	],
}

export default card
