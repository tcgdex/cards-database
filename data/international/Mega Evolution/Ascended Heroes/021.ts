import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'es-mx': "Charmeleon",
		'de-de': "Glutexo",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon"
	},

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'es-mx': "Charmander",
		'de-de': "Glumanda",
		'it-it': "Charmander",
		'pt-br': "Charmander",
	},

	illustrator: "Julie Hang",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [5],
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'es-mx': "Explosión Ígnea",
			'de-de': "Hitzestoß",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869632,
			tcgplayer: 675833
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870172,
			tcgplayer: 676870
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870171,
			tcgplayer: 677010
		}
	},
],
}

export default card
