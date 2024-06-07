import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サイドン",
		'zh-tw': "鑽角犀獸",
		th: "ไซดอน",
		id: "Rhydon"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [112],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "全身を よろいのような 皮膚で 守っている。 ２０００度の マグマの 中でも 生きられる。",
		'zh-tw': "全身被鎧甲般的皮膚保護著。甚至能在 ２０００度的熔岩中生存。",
		th: "ปกป้องทั้งร่างกายด้วยผิวหนังที่เหมือนเกราะหุ้ม สามารถมีชีวิตอยู่ได้แม้จะอยู่ในแมกมาอุณหภูมิ 2000 องศา",
		id: "Seluruh tubuh Rhydon dilindungi oleh kulit yang menyerupai zirah. Dia dapat tetap hidup meskipun berada dalam magma bersuhu 2000 °C."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "たたきつぶす",
			'zh-tw': "砸碎",
			th: "ทุบแหลก",
			id: "Pukul Hancur"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "カリスマドリル",
			'zh-tw': "領導力鑽",
			th: "สว่านทรงเสน่ห์",
			id: "Charisma Drill"
		},

		damage: "40+",

		effect: {
			ja: "この番、手札から「サカキのカリスマ」を出して使っていたなら、140ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了「坂木的領導力」，則增加140點傷害。",
			th: "เทิร์นนี้ ถ้านำการ์ด [เสน่ห์ของซากากิ] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 140",
			id: "Jika pada giliran ini, Karisma Giovanni telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 140."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card