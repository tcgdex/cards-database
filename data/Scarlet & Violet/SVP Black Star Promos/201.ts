import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika",
		fr: "Zéblitz"
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
				fr: "Pleine Vitesse"
			},
			effect: {
				en: "Discard your hand and draw 6 cards.",
				fr: "Défaussez votre main, puis piochez 6 cartes."
			}
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal"
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
