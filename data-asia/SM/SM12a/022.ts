import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオン",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "水蒸気を 噴き出して 自分の 姿を 濃霧で 隠す。 人の 立ち入らない 山に 住むという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フレアスターター" },
			cost: ["Fire"],
			effect: {
				ja: "自分の山札にある[炎]エネルギーを1枚、自分のポケモンにつける。そして山札を切る。後攻プレイヤーの最初の番に使ったなら、つけられる枚数は3枚までになり、自分のポケモンに好きなようにつけられる。",
			},
		},
		{
			name: { ja: "こうねつばくは" },
			damage: "50+",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分の場に[炎]エネルギーが4個以上あるなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543501,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "None",
	dexId: [721],
};

export default card;
