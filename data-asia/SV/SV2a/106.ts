import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "サワムラー",
		'zh-tw': "飛腿郎",
		th: "ซาวามูลาร์",
		id: "Hitmonlee",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "脚が 自由に 伸び縮みして 遠く 離れている 場合でも 相手を 蹴り上げることが できる。",
		'zh-tw': "雙腿能夠自由伸縮，即使離得很遠也能 把對手一腳踢飛。",
		th: "ขายืดหดได้อิสระ ถึงแม้จะอยู่ไกลก็สามารถเตะคู่ต่อสู้ให้ลอยไปได้",
		id: "Kaki Hitmonlee dapat memanjang dan memendek dengan bebas, sehingga dia dapat menendang lawan meski jaraknya terpisah jauh.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "トルネードキック",
				'zh-tw': "龍捲風踢腿",
				th: "ทอร์นาโดคิก",
				id: "Tornado Kick",
			},
			cost: ["Fighting"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ10ダメージ。このポケモンをベンチポケモンと入れ替える。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的所有寶可夢各受到10點傷害。將這隻寶可夢與備戰寶可夢互換。[在備戰區不計算弱點・抵抗力。]",
				th: "โปเกมอนฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 10 สลับโปเกมอนนี้กับโปเกมอนบนเบนช์ {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
				id: "Serangan ini memberikan kerusakan masing-masing sejumlah 10 kepada semua Pokémon lawan. Tukar Pokémon ini dengan Pokémon Cadangan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			},
		},
		{
			name: {
				ja: "けたぐり",
				'zh-tw': "踢倒",
				th: "เตะเลียด",
				id: "Tendangan Rendah",
			},
			damage: 100,
			cost: ["Fighting", "Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719559,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837440,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837441,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [106],
};

export default card;
