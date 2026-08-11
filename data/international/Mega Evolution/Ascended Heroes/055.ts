import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'es-mx': "Pikachu",
		'de-de': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu"
	},

	illustrator: "kamonabe",
	rarity: "Common",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Tail Smack",
			'fr-fr': "Coup de Queue",
			'es-es': "Bofetón Cola",
			'es-mx': "Cachetazo de Cola",
			'de-de': "Schweifschlag",
			'it-it': "Codasberla",
			'pt-br': "Ataque de Cauda"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Tiny Bolt",
			'fr-fr': "Foudre Minuscule",
			'es-es': "Relampaguito",
			'es-mx': "Minirrayo",
			'de-de': "Mini-Blitz",
			'it-it': "Minifulmine",
			'pt-br': "Corisquinho"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869666,
			tcgplayer: 675867
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870226,
			tcgplayer: 676897
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870225,
			tcgplayer: 677037
		}
	},
],
}

export default card
