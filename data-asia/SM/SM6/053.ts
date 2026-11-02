import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガン",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "夕日を 浴び 特別な 進化を した ルガルガン。 もの静かだが 激しい 闘志を 秘めている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "デスローグ" },
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数x20ダメージ追加。",
			},
		},
		{
			name: { ja: "アクセルロック" },
			damage: 100,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559598,
			},
		},
	],

	evolveFrom: {
		ja: "イワンコ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [745],
};

export default card;
