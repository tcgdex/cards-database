import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "コイル",
		'zh-tw': "小磁怪",
		th: "คอยล์",
		id: "Magnemite"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "空中に 浮いたまま 移動して 左右の ユニットから 電磁波などを 放射する。",
		'zh-tw': "會浮在空中移動，從左右兩邊的組件發射 電磁波之類的東西。",
		th: "ลอยและเคลื่อนที่กลางอากาศ แผ่คลื่นแม่เหล็กไฟฟ้าออกมาจากชิ้นส่วนซ้ายขวา",
		id: "Magnemite berpindah sambil tetap melayang di udara. Pokémon ini memancarkan gelombang elektromagnetik dan sebagainya dari unit sisi kiri dan kanan di tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はんぱつ",
			'zh-tw': "反抗",
			th: "ดีดกลับ",
			id: "Tolak-menolak"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			id: "Tukar Pokémon ini dengan Pokémon Cadangan."
		}
	}, {
		cost: ["Lightning"],

		name: {
			ja: "エレキボール",
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล",
			id: "Electro Ball"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card