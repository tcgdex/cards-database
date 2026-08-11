import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペロリーム",
		'zh-tw': "胖甜妮",
		'th-th': "เพโรรีม",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "体臭から 心と 体の 調子を 嗅ぎとる。 医療への 応用が 期待されている。",
		'zh-tw': "能從人們身上的氣味裡 嗅出他們的身心狀態。 在醫療領域的實際應用備受矚目。",
		'th-th': "สามารถรับรู้สภาพร่างกายและจิตใจได้จากการดมกลิ่นตัว ถูกคาดหวังว่าจะสามารถนำมาปรับใช้ในทางการแพทย์ได้",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ペロペロリン",
				'zh-tw': "甜甜你",
				'th-th': "แลบลิ้นแพล็บ",
			},
			damage: "90×",
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数×90ダメージ。すべてウラなら、相手のバトルポケモンをこんらんにする。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。若全部為反面，則將對手的戰鬥寶可夢【混亂】。",
				'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x90 ถ้าออกก้อยทั้งหมด จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767145,
				tcgplayer: 568042,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ペロッパフ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [685],
};

export default card;
