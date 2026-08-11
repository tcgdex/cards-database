import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "尻尾で 発電所や 民家の コンセントから 電気を 吸い取り ヒゲから 電撃を 撃ち出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ともだちをさがす" },
			cost: ["Fairy"],
			effect: {
				ja: "自分の山札にあるポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "エレキチェイン" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチに[雷]ポケモンがいるなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559607,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [702],
};

export default card;
