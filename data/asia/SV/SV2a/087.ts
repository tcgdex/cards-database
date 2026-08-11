import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジュゴン",
		'zh-tw': "白海獅",
		'th-th': "จูกอน",
		'id-id': "Dewgong",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'ja-jp': "食事の 後は 砂浜で 日光浴を している。 体温を あげて 消化を よく するのだ。",
		'zh-tw': "進食之後會在沙灘上 做日光浴，藉此提高體溫 來幫助消化。",
		'th-th': "หลังกินอาหาร ก็จะไปนอนอาบแดดที่หาดทราย เพื่อเพิ่มอุณหภูมิร่างกายให้ย่อยอาหารได้ดีขึ้น",
		'id-id': "Dewgong mandi sinar matahari di pantai setelah selesai makan. Peningkatan suhu tubuhnya membantu proses pencernaan.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "デュアルスプラッシュ",
				'zh-tw': "二重飛濺",
				'th-th': "ดูอัลสแปลช",
				'id-id': "Dual Splash",
			},
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的2隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
				'th-th': "โปเกมอนฝ่ายตรงข้าม 2 ตัว จะได้รับแดเมจตัวละ 50 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
				'id-id': "Serangan ini memberikan kerusakan masing-masing sejumlah 50 kepada 2 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			},
		},
		{
			name: {
				'ja-jp': "オーロラビーム",
				'zh-tw': "極光束",
				'th-th': "ออโรร่าบีม",
				'id-id': "Aurora Beam",
			},
			damage: 100,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719529,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837402,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837403,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "パウワウ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [87],
};

export default card;
