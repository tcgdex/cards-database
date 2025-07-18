import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Seel",
		ja: "シール",
		fr: "Voile",
		de: "Seel",
		es: "Buhonilla",
		it: "Seel",
		pt: "Seel",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [86],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				en: "Headbutt",
				ja: "ヘッドバット",
				fr: "Coup de tête",
				de: "Headbutt",
				es: "Cabezal",
				it: "Headbutt",
				pt: "Cabeça",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
