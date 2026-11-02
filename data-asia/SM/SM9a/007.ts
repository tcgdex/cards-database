import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "メノクラゲ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "海辺を 漂い 獲物を 探す。 毒の 触手は ちぎれることも あるが 時間が 経てば 生えてくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あわとばしのじゅつ" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "この番、手札から「アンズ」を出して使っていたなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558194,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [72],
};

export default card;
