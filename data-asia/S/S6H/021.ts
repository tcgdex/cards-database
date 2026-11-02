import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキメノコ",
		'zh-tw': "雪妖女",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "マイナス５０度の 冷気を 吐き 凍らせた 獲物を すみかに 持ち帰り きれいに 並べる。",
		'zh-tw': "會吐出零下５０度的冷氣凍住獵物，並把牠們帶回自己的巢穴，整齊地擺成一排。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しもふらし" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから[水]エネルギーを1枚選び、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "クリスタルブレス",
				'zh-tw': "天狗再見",
			},
			damage: 90,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "將身上放置有傷害指示物的對手的戰鬥寶可夢與附加的卡，全部放回對手的手牌。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560437,
				tcgplayer: 569153,
			},
		},
	],

	evolveFrom: {
		ja: "ユキワラシ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [478],
};

export default card;
