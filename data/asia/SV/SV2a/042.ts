import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴルバット",
		'zh-tw': "大嘴蝠",
		'th-th': "โกลแบท",
		'id-id': "Golbat",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'ja-jp': "小さな 脚で 器用に 歩く。 寝ている 獲物に 忍びより キバを 突きたて 血を すするのだ。",
		'zh-tw': "能以小小的腳靈巧地步行。會無聲無息地靠近沉睡中的獵物， 用獠牙咬住對方並且吸食血液。",
		'th-th': "เดินอย่างคล่องตัวด้วยขาขนาดเล็ก แอบฝังเขี้ยวเข้ากับเหยื่อที่กำลังหลับใหลและดูดเลือด",
		'id-id': "Golbat berjalan dengan cekatan menggunakan kakinya yang kecil. Pokémon ini mengendap mendekati mangsa yang sedang tidur, menusukkan taringnya, dan menyedot darah.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ちょくげきひこう",
				'zh-tw': "直擊飛行",
				'th-th': "บินพุ่งชน",
				'id-id': "Terbang Linear",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到40點傷害。[在備戰區不計算弱點・抵抗力。]",
				'th-th': "ทำแดเมจ 40 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
				'id-id': "Serangan ini memberikan kerusakan sejumlah 40 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719484,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837301,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837302,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ズバット",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [42],
};

export default card;
