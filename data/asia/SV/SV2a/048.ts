import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コンパン",
		'zh-tw': "毛球",
		'th-th': "คองปัง",
		'id-id': "Venonat",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "全身から 毒が にじみでる。 暗くなると 灯りに 群がった 小さな 虫ポケモンを 捕らえる。",
		'zh-tw': "全身上下都會滲出毒素。天黑後就會去捕捉聚在 燈光處的小型蟲寶可夢。",
		'th-th': "มีพิษไหลซึมออกจากทั่วร่างกาย พอตกค่ำจะไปจับโปเกมอนแมลงตัวเล็ก ๆ ที่มารวมตัวกันตามแสงไฟ",
		'id-id': "Racun bercucuran dari tubuh Venonat. Ketika hari menjadi gelap, Pokémon ini menangkap Pokémon serangga kecil yang berkumpul di sumber cahaya.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "かじる",
				'zh-tw': "咬",
				'th-th': "แทะ",
				'id-id': "Menggerogot",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "ビーム",
				'zh-tw': "光束",
				'th-th': "ลำแสง",
				'id-id': "Beam",
			},
			damage: 40,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719490,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837313,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837314,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [48],
};

export default card;
