import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴローン",
		'zh-tw': "隆隆石",
		'th-th': "โกโลน",
		'id-id': "Graveler",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "崖を 転がり 移動する。 間違えて 川に 落ちると 最期の あがきで 大爆発。",
		'zh-tw': "藉著從山崖上滾落來移動。 如果不小心掉進河裡， 就會在最後掙扎時來個大爆炸。",
		'th-th': "เคลื่อนที่โดยกลิ้งไปตามผา พอพลาดตกลงแม่น้ำแล้ว ก็จะดิ้นรนจนหยดสุดท้ายแล้วระเบิดตัว",
		'id-id': "Graveler bergerak dengan cara menggelindingkan diri di tebing. Jika salah gerak dan jatuh ke sungai, Pokémon ini meledak sebagai usaha terakhirnya.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "れんぞくいわなげ",
				'zh-tw': "連續投石",
				'th-th': "ปาหินต่อเนื่อง",
				'id-id': "Lempar Batu Beruntun",
			},
			damage: "40×",
			cost: ["Fighting"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数×40ダメージ。",
				'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×40點傷害。",
				'th-th': "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x40",
				'id-id': "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 40 untuk tiap lemparan dengan hasil sisi depan.",
			},
		},
		{
			name: {
				'ja-jp': "ヘビーインパクト",
				'zh-tw': "重磅衝擊",
				'th-th': "เฮวี่อิมแพ็คท์",
				'id-id': "Heavy Impact",
			},
			damage: 60,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719517,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837377,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837378,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イシツブテ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [75],
};

export default card;
