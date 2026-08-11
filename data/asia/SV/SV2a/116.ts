import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タッツー",
		'zh-tw': "墨海馬",
		'th-th': "ทัททู",
		'id-id': "Horsea",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "水中を 踊るように 泳いで 渦を つくる。 仲間と 渦の 大きさを 競って 遊ぶ。",
		'zh-tw': "會在水中跳舞似地游動來製造漩渦。玩耍時會和夥伴 比賽誰做出的漩渦比較大。",
		'th-th': "ว่ายน้ำราวกับเต้นระบำอยู่ในน้ำทำให้เกิดน้ำวน จะแข่งกับพวกพ้องสร้างน้ำวนขนาดใหญ่เล่นกัน",
		'id-id': "Horsea berenang bagaikan menari di dalam air dan membuat pusaran. Mereka bermain dengan bertanding siapa yang membuat pusaran paling besar.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "みずかけ",
				'zh-tw': "潑水",
				'th-th': "สาดน้ำ",
				'id-id': "Guyuran Air",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				'ja-jp': "するどいひれ",
				'zh-tw': "銳利鰭",
				'th-th': "ครีบแหลมคม",
				'id-id': "Sirip Tajam",
			},
			damage: 40,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719569,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837458,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837459,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [116],
};

export default card;
