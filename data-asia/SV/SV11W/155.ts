import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ムーランド",
	},

	illustrator: "Eri Kamei",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "吹雪で 閉ざされた 山に 入り 遭難した 人を 助ける。 長い 毛が 寒さを 防ぐ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "かぎわける" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数ぶんまで、自分のトラッシュから好きなカードを選び、相手に見せて、手札に加える。",
			},
		},
		{
			name: { ja: "スペシャルファング" },
			damage: "100+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに特殊エネルギーがついているなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "ハーデリア",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [508],
	thirdParty: {
		cardmarket: 829514,
		tcgplayer: 636708,
	},
};

export default card;
