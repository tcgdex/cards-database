import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Ponyta",
		ja: "ポニータ",
		fr: "Ponyta",
		de: "Ponyta",
		es: "Ponyta",
		it: "Ponyta",
		pt: "Ponyta",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [77],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Smash Kick",
				ja: "スマッシュキック",
				fr: "Coup de pied",
				de: "Smash Kick",
				es: "Patada",
				it: "Smash Kick",
				pt: "Smash Kick",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				en: "Flame Tail",
				ja: "炎の尾",
				fr: "Queue de flamme",
				de: "Flammenschwanz",
				es: "Cola de llamas",
				it: "Coda di fiamma",
				pt: "Cauda de chama",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
