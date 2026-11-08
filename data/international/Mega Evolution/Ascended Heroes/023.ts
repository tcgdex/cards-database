import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ethan's Slugma",
		'fr-fr': "Limagma de Luth",
		'es-es': "Slugma de Eco",
		'es-mx': "Slugma de Ethan",
		'de-de': "Klarins Schneckmag",
		'it-it': "Slugma di Armonio",
		'pt-br': "Slugma do Ethan"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'es-es': "Lanzallamas Continuo",
			'es-mx': "Escupefuego",
			'de-de': "Stetiger Feuerhauch",
			'it-it': "Soffiofuoco Mirato",
			'pt-br': "Hálito de Fogo Constante"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Its lava body can cool and chip away at times, but a magma bath will heal it right up.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869634,
			tcgplayer: 675835
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870174,
			tcgplayer: 676871
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870173,
			tcgplayer: 677011
		}
	},
],
}

export default card
