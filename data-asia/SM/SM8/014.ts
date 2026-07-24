import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ものすごい 怪力の 持ち主。 自分の 体重の １００倍の 重さでも 楽に ぶん投げる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ひゃくにんりき" },
			damage: "30+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分のベンチに2進化ポケモンがいるなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558653,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [214],
};

export default card;
