import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slurpuff",
		'fr-fr': "Cupcanaille",
		'es-es': "Slurpuff",
		'es-mx': "Slurpuff",
		'de-de': "Sabbaione",
		'it-it': "Slurpuff",
		'pt-br': "Slurpuff"
	},

	evolveFrom: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
		'es-es': "Swirlix",
		'es-mx': "Swirlix",
		'de-de': "Flauschling",
		'it-it': "Swirlix",
		'pt-br': "Swirlix",
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [685],
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'es-mx': "Tacleada",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'es-mx': "Disparo Mágico",
			'de-de': "Magischer Schuss",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	description: {
		'en-us': "It can distinguish the faintest of scents. It puts its sensitive sense of smell to use by helping pastry chefs in their work.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869705,
			tcgplayer: 675906
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870284,
			tcgplayer: 676926
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870283,
			tcgplayer: 677066
		}
	},
],
}

export default card
