import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [529],
	set: Set,

	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'de-de': "Rotomurf",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'es-es': "Drilbur",
		'es-mx': "Drilbur"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'de-de': "Lehmschelle",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'es-es': "Bofetón Lodo",
			'es-mx': "Bofetón Lodo"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'de-de': "Korkenzieherhieb",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'es-es': "Puño Tirabuzón",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835998,
				tcgplayer: 642497
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835998,
				tcgplayer: 642497
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836370,
				tcgplayer: 642740
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836369,
				tcgplayer: 642667
			}
		}
	]
}

export default card
