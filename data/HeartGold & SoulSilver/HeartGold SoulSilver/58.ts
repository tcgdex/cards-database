import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras’face",
				de: "Pfund"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Happy Punch",
				fr: "Coup d’joie",
				de: "Freudenschlag"
			},
			effect: {
				en: "Flip a coin. If heads, remove 3 damage counters from Chansey.",
				fr: "Lancez une pièce. Si c’est face, retirez 3 marqueurs de dégâts de Leveinard.",
				de: "Wirf eine Münze. Entferne bei \"Kopf\" 3 Schadensmarken von Chaneira."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It walks carefully to prevent its egg from breaking. However, it is extremely fast at running away."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279030
	}
}

export default card
