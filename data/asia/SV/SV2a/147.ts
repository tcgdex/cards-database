import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミニリュウ",
		'zh-tw': "迷你龍",
		'th-th': "มินิริว",
		'id-id': "Dratini",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'ja-jp': "激しく 流れ落ちる 滝に 守られながら 脱皮を 繰り返し どんどん 大きくなる。",
		'zh-tw': "會在直瀉而下的瀑布保護下反覆蛻皮， 使身體變得越來越大。",
		'th-th': "ขณะที่ถูกปกป้องด้วยน้ำตกที่ไหลแรง ก็จะลอกคราบไปเรื่อย ๆ จนค่อย ๆ โตขึ้น",
		'id-id': "Sambil dilindungi air terjun yang mengalir deras, Dratini terus-menerus berganti kulit dan tumbuh membesar.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "たたく",
				'zh-tw': "敲擊",
				'th-th': "ตี",
				'id-id': "Menghantam",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				'ja-jp': "ドラゴンウィップ",
				'zh-tw': "龍之鞭打",
				'th-th': "ดรากอนวิป",
				'id-id': "Dragon Whip",
			},
			damage: 40,
			cost: ["Water", "Lightning"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719600,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837516,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837517,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [147],
};

export default card;
