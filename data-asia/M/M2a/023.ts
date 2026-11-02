import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "バクーダ",
	},

	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "背中の コブの 火山は １０年ごとに 大噴火 するが 激しく 怒っても 噴火する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "やけどあぶり" },
			damage: 110,
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンがやけどでないなら、このワザは失敗。",
			},
		},
		{
			name: { ja: "パワースタンプ" },
			damage: 170,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861266,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861564,
			},
		},
		{
			type: "reverse",
			foil: "quickball",
			thirdParty: {
				cardmarket: 861565,
			},
		},
	],

	evolveFrom: {
		ja: "ドンメル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [323],
};

export default card;
