import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロ",
		'zh-tw': "烏賊王",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "発光体の 光を 見つめると たちまち 催眠状態になり カラマネロに 操られてしまう。",
		'zh-tw': "要是盯著牠的發光體看， 就會馬上陷入催眠狀態， 並且受到牠的控制。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "けったくテンタクル",
				'zh-tw': "勾結觸手",
			},
			cost: ["Darkness"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに120ダメージ。この番、手札から「クセロシキのたくらみ」を出して使っていないなら、このワザは失敗。",
				'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到120點傷害。在這個回合，若沒有從手牌使出「‌‌庫瑟洛斯奇的企圖」，則這個招式失敗。",
			},
		},
		{
			name: {
				ja: "かいてんアタック",
				'zh-tw': "迴轉攻擊",
			},
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773783,
				tcgplayer: 566285,
			},
		},
	],

	evolveFrom: {
		ja: "マーイーカ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [687],
};

export default card;
