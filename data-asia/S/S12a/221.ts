import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツーVSTAR",
		'zh-tw': "超夢VSTAR",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "サイコパージ",
				'zh-tw': "精神光芒",
			},
			damage: "90×",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[P]エネルギーを3枚までトラッシュし、その枚数×90ダメージ。",
				'zh-tw': "將自己的場上寶可夢身上附加的最多3張【超】能量卡丟棄，造成其張數×90點傷害。",
			},
		},
		{
			name: {
				ja: "スターレイド",
				'zh-tw': "[VSTAR力量]星星襲擊",
			},
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手の「ポケモンV」全員に、それぞれ120ダメージ。このワザのダメージは弱点・抵抗力を計算しない。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "對手的所有「寶可夢【V】」各受到120點傷害。這個招式的傷害不計算弱點・抵抗力。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687783,
				tcgplayer: 571759,
			},
		},
	],

	evolveFrom: {
		ja: "ミュウツーV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [150],
};

export default card;
