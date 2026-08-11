import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イシツブテ",
		'zh-tw': "小拳石",
		'th-th': "อิชิซึบูเตะ",
		'id-id': "Geodude",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'ja-jp': "両手を 使い 険しい 崖を 登る。 その姿を 見た 人が ボルダリングを 始めたらしい。",
		'zh-tw': "會用雙手攀登險峻的山崖。 人們似乎是在目睹牠那姿態之後 才開始了抱石攀岩運動。",
		'th-th': "ใช้แขนทั้งสองข้างปีนหน้าผาชันได้ จุดเริ่มของกีฬาปีนผา เหมือนจะมาจากคนที่เห็นภาพดังกล่าว",
		'id-id': "Geodude menggunakan kedua tangannya untuk memanjat tebing yang curam. Orang yang melihatnya kabarnya mulai melakukan panjat tebing.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "かたまる",
				'zh-tw': "凝固",
				'th-th': "ทำให้แข็ง",
				'id-id': "Perkeras",
			},
			cost: ["Fighting"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
				'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
				'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30.",
			},
		},
		{
			name: {
				'ja-jp': "げんこつ",
				'zh-tw': "拳骨",
				'th-th': "กำปั้น",
				'id-id': "Kepalan Tinju",
			},
			damage: 20,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719516,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837375,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837376,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [74],
};

export default card;
