import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Lairon",
		fr: "Galegon",
		de: "Stollrak"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Aron",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Mend",
				fr: "Réparation",
				de: "Reparieren"
			},
			effect: {
				en: "Search your discard pile for a Metal Energy card and attach it to Lairon. If you do, remove 2 damage counters from Lairon.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie Metal et attachez-la à Galegon. Retirez-lui alors 2 marqueurs de dégât.",
				de: "Durchsuche deinen Ablagestapel nach 1 -Energiekarte und lege sie an Stollrak an. Wenn du das machst, entferne 2 Schadensmarken von Stollrak."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Confront",
				fr: "Confrontation",
				de: "Konfrontieren"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		fr: "Il se nourrit du minéral de fer qu'il fore. Il défend son territoire en chargeant avec son corps d'acier."
	}
}

export default card
