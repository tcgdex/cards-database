import { Card } from "../../../interfaces";
import Set from "../S8b";

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
			name: {
				ja: "しもふらし",
				'zh-tw': "降霜",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから[水]エネルギーを1枚選び、自分のポケモンにつける。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的棄牌區選擇1張【水】能量卡，附於自己的寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "クリスタルブレス",
				'zh-tw': "水晶吐息",
			},
			damage: 90,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586551,
				tcgplayer: 571288,
			},
		},
	],

	evolveFrom: {
		ja: "ユキワラシ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [478],
};

export default card;
