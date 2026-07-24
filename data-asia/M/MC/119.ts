import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのヒヒダルマ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "体内の 炎が 燃え盛るほど パワーが 高まる。 その 温度は １４００度を 超える ことも。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バックドラフト" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のトラッシュにある基本エネルギーの枚数×30ダメージ。",
			},
		},
		{
			name: { ja: "ひだるまキャノン" },
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のベンチポケモン1匹にも、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863415,
			},
		},
	],

	evolveFrom: {
		ja: "Nのダルマッカ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [555],
};

export default card;
