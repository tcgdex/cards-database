import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "エビワラー",
		'zh-tw': "快拳郎",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "空気をも 切り裂く パンチ。 だが ３分間 攻撃すると ひと休み したくなるらしい。",
		'zh-tw': "打出的拳擊甚至能劈開空氣。但連續攻擊３分鐘後，牠似乎就會想休息一下。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "クリーンヒット",
				'zh-tw': "俐落一擊",
			},
			damage: "20+",
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、50ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加50點傷害。",
			},
		},
		{
			name: {
				ja: "だんがんストレート",
				'zh-tw': "槍彈直擊",
			},
			damage: 40,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
				'zh-tw': "這個招式的傷害不計算抵抗力。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571600,
				tcgplayer: 569341,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [107],
};

export default card;
