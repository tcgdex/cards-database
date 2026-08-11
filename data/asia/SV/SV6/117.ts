import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン いどのめんex",
		'zh-tw': "厄鬼椪 水井面具ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すすりなく",
				'zh-tw': "啜泣",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "げきりゅうポンプ",
				'zh-tw': "激流水泵",
			},
			damage: 100,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを3個選び、山札にもどして切る。その場合、相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "若希望，選擇3個這隻寶可夢身上附加的能量，放回牌庫並重洗。這個情況下，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767551,
				tcgplayer: 568107,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [1017],

	suffix: "EX",
};

export default card;
