import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴロンダ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'ja-jp': "葉っぱで 相手の 動きを 読む。 大型 ダンプカーを 一撃で スクラップにする パンチを もつ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いちゃもん" },
			damage: 30,
			cost: ["Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンが持つワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。",
			},
		},
		{
			name: { ja: "パワータックル" },
			damage: 160,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863781,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤンチャム",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [675],
};

export default card;
