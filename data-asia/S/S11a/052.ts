import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ザシアン",
		'zh-tw': "蒼響",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "かつての 得物で 武装した。 キョダイマックスポケモンも 一刀の もとに 切り捨てる。",
		'zh-tw': "用過去使用的兵器武裝自己。即使是超極巨化寶可夢，也能以一劍將之拿下。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "バトルレギオン",
				'zh-tw': "戰鬥軍團",
			},
			damage: "20+",
			cost: ["Metal"],
			effect: {
				ja: "自分のベンチポケモンの数×10ダメージ追加。このワザのダメージは、弱点と、相手のバトルポケモンにかかっている効果を計算しない。",
				'zh-tw': "增加自己的備戰寶可夢的數量×10點傷害。這個招式的傷害不計算弱點與對手的戰鬥寶可夢身上的附加效果。",
			},
		},
		{
			name: {
				ja: "スライスブレード",
				'zh-tw': "利刃切割",
			},
			damage: 100,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673050,
				tcgplayer: 570815,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [888],
};

export default card;
