import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドリーノ",
		'zh-tw': "尼多力諾",
		'th-th': "นิโดริโน",
		'id-id': "Nidorino",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'ja-jp': "神経質で 喧嘩っ早い。 体内の アドレナリンが 増えると 毒素の 濃度も 高まるぞ。",
		'zh-tw': "神經質且容易發脾氣打架。當體內的腎上腺素增加時， 毒素的濃度也會提升。",
		'th-th': "หงุดหงิดขี้กังวล แค่เรื่องนิดหน่อยก็ชวนทะเลาะ หากอะดรีนาลีนในร่างกายเพิ่มสูงขึ้น ความเข้มข้นของพิษก็จะสูงขึ้นไปด้วย",
		'id-id': "Nidorino mudah tersinggung dan suka berkelahi. Ketika adrenalin di dalam tubuhnya bertambah, kepekatan unsur racunnya pun meningkat.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "するどいキバ",
				'zh-tw': "銳利之牙",
				'th-th': "เขี้ยวคม",
				'id-id': "Taring Tajam",
			},
			damage: 30,
			cost: ["Darkness"],
		},
		{
			name: {
				'ja-jp': "かいりきホーン",
				'zh-tw': "怪力角擊",
				'th-th': "เขามหากาฬ",
				'id-id': "Tanduk Tenaga Super",
			},
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719475,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837287,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837288,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニドラン♂",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [33],
};

export default card;
