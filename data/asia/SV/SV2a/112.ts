import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サイドン",
		'zh-tw': "鑽角犀獸",
		'th-th': "ไซดอน",
		'id-id': "Rhydon",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "全身を よろいのような 皮膚で 守っている。 ２０００度の マグマの 中でも 生きられる。",
		'zh-tw': "全身被鎧甲般的皮膚保護著。甚至能在 ２０００度的熔岩中生存。",
		'th-th': "ปกป้องทั้งร่างกายด้วยผิวหนังที่เหมือนเกราะหุ้ม สามารถมีชีวิตอยู่ได้แม้จะอยู่ในแมกมาอุณหภูมิ 2000 องศา",
		'id-id': "Seluruh tubuh Rhydon dilindungi oleh kulit yang menyerupai zirah. Dia dapat tetap hidup meskipun berada dalam magma bersuhu 2000 °C.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "たたきつぶす",
				'zh-tw': "砸碎",
				'th-th': "ทุบแหลก",
				'id-id': "Pukul Hancur",
			},
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: {
				'ja-jp': "カリスマドリル",
				'zh-tw': "領導力鑽",
				'th-th': "สว่านทรงเสน่ห์",
				'id-id': "Charisma Drill",
			},
			damage: "40+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				'ja-jp': "この番、手札から「サカキのカリスマ」を出して使っていたなら、140ダメージ追加。",
				'zh-tw': "在這個回合，若從手牌使出了「坂木的領導力」，則增加140點傷害。",
				'th-th': "เทิร์นนี้ ถ้านำการ์ด [เสน่ห์ของซากากิ] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 140",
				'id-id': "Jika pada giliran ini, Karisma Giovanni telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 140.",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719565,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837452,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837453,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "サイホーン",
	},

	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [112],
};

export default card;
