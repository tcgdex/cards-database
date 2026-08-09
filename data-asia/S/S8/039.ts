import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウV",
		'zh-tw': "夢幻V",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エナジーミックス",
				'zh-tw': "能量混和",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札からエネルギーを1枚選び、自分の「フュージョン」のポケモンにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張能量卡，附於自己的「匯流」寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "サイコジャンプ",
				'zh-tw': "精神之跳",
			},
			damage: 70,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
				'zh-tw': "若希望，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575594,
				tcgplayer: 569540,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [151],
};

export default card;
