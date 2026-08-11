import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のスリーパー",
		'zh-tw': "<火箭隊的>引夢貘人",
		'zh-cn': "<火箭隊的>引夢貘人",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "相手と 目が 合ったときに 催眠術など 数々の 超能力を 使うという。",
		'zh-tw': "據說牠和對手對到眼時， 就會使出催眠術等 各式各樣的超能力。",
		'zh-cn': "據說牠和對手對到眼時， 就會使出催眠術等 各式各樣的超能力。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "サイコショット",
				'zh-tw': "精神射擊",
				'zh-cn': "精神射擊",
			},
			damage: 40,
			cost: ["Psychic"],
		},
		{
			name: {
				ja: "ベンチをあやつる",
				'zh-tw': "備戰區操縱",
				'zh-cn': "備戰區操縱",
			},
			damage: "80×",
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "相手は相手自身のベンチポケモンの数ぶんコインを投げる。相手のバトルポケモンに、ウラの数×80ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
				'zh-tw': "對手擲與對手自己的備戰寶可夢的數量相同次數的硬幣。對手的戰鬥寶可夢受到反面出現的次數×80點傷害。這個招式的傷害不計算弱點・抵抗力。",
				'zh-cn': "對手擲與對手自己的備戰寶可夢的數量相同次數的硬幣。對手的戰鬥寶可夢受到反面出現的次數×80點傷害。這個招式的傷害不計算弱點・抵抗力。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821870,
				tcgplayer: 628679,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のスリープ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [97],
};

export default card;
