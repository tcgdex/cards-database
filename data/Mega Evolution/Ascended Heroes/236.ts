import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		es: "Slurpuff",
		'es-mx': "Slurpuff",
		de: "Sabbaione",
		it: "Slurpuff",
		pt: "Slurpuff"
	},

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		'es-mx': "Swirlix",
		de: "Flauschling",
		it: "Swirlix",
		pt: "Swirlix",
	},

	illustrator: "Yoshimoto Yoshimon",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [685],
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			'es-mx': "Tacleada",
			de: "Tackle",
			it: "Azione",
			pt: "Investida"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			'es-mx': "Disparo Mágico",
			de: "Magischer Schuss",
			it: "Magicolpo",
			pt: "Tiro Mágico"
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
		en: "It can distinguish the faintest of scents. It puts its sensitive sense of smell to use by helping pastry chefs in their work.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869847,
				tcgplayer: 676048
			}
		}
	],
}

export default card
