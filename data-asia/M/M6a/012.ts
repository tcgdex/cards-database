import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "フリーザー",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "青く 美しい 羽根は 氷で できていると 言われている。 長い 尾を たなびかせ 雪山を 飛ぶ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いてつくはばたき" },
			effect: {
				ja: "自分の場に「ファイヤー」「サンダー」がいるなら、自分の番に1回使える。自分の手札から「基本[W]エネルギー」を1枚選び、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "あられ" },
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908190,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [144],
};

export default card;
