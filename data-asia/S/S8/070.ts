import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲデマル",
		'zh-tw': "托戈德瑪爾",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "ピンチになると 体を 丸めて 背中の とげとげを 逆立てると でたらめに 電撃を 撃ちまくる。",
		'zh-tw': "在危急時刻會把身體捲成一團、倒豎起背上的尖刺，不分青紅皂白地發出電擊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みんなでころがる",
				'zh-tw': "一同滾動",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチの、ワザ「みんなでころがる」を持つポケモンの数×20ダメージ。",
				'zh-tw': "造成自己的備戰區的，持有「一同滾動」招式的寶可夢的數量×20點傷害。",
			},
		},
		{
			name: {
				ja: "ボールアタック",
				'zh-tw': "滾球攻擊",
			},
			damage: 50,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575625,
				tcgplayer: 569571,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [777],
};

export default card;
