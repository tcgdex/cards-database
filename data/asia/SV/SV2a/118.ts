import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トサキント",
		'zh-tw': "角金魚",
		'th-th': "โทซาคินโตะ",
		'id-id': "Goldeen",
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "背びれ 胸びれが 筋肉のように 発達しており 水中を ５ノットの 速さで 泳ぐ。",
		'zh-tw': "背鰭和尾鰭像肌肉那樣發達。能夠以 ５節的速度在水中游泳。",
		'th-th': "ครีบหลังและครีบอกเจริญเติบโตราวกับกล้ามเนื้อ ว่ายน้ำด้วยความเร็ว 5 นอต",
		'id-id': "Sirip punggung dan sirip dada Goldeen tumbuh bak otot, sehingga dia bisa berenang dengan kecepatan 5 knot di dalam air.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "さんれんづき",
				'zh-tw': "三連撞",
				'th-th': "พุ่งชนสามครั้ง",
				'id-id': "Tusukan Tiga Kali",
			},
			damage: "10×",
			cost: ["Water"],
			effect: {
				'ja-jp': "コインを3回投げ、オモテの数×10ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
				'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
				'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan.",
			},
		},
		{
			name: {
				'ja-jp': "うちみず",
				'zh-tw': "潑灑清水",
				'th-th': "ราดน้ำ",
				'id-id': "Percikan Air",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719571,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837462,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837463,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [118],
};

export default card;
