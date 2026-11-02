import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "チリーン",
		'zh-tw': "風鈴鈴",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "鳴き声は 体の 空洞で 響き合って きれいな 音色になり 敵を驚かせ 追いはらう。",
		'zh-tw': "叫聲會在身體的空洞裡 迴盪出美麗的音色， 趕走被嚇到的敵人。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ハイパーボイス",
				'zh-tw': "巨聲",
			},
			damage: 20,
			cost: ["Psychic"],
		},
		{
			name: {
				ja: "おかえりチャイム",
				'zh-tw': "回家鐘聲",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。",
				'zh-tw': "選擇1隻自己的備戰寶可夢，將那隻寶可夢與附加的卡全部放回牌庫並重洗。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767540,
				tcgplayer: 568096,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [358],
};

export default card;
