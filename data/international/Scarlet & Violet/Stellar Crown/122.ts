import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [662],
	set: Set,

	name: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Speed Dive",
			'fr-fr': "Plongée Rapide",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785976,
				tcgplayer: 567353
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785976,
				tcgplayer: 567353
			}
		},
	],

	illustrator: "Julie Hang",

}

export default card
