import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
		de: "Elezeba",
		it: "Blitzle",
		pt: "Blitzle",
		es: "Blitzle",
		'es-mx': "Blitzle"
	},
	stage: "Stage1",
	illustrator: "Krgc",
	dexId: [523],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Full Speed",
			},
			effect: {
				en: "Discard your hand and draw 6 cards."
			}
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				en: "Head Bolt",
			},
			damage: 70,
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			subtype: "cosmos"
		}
	]
}

export default card
