import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒラヒナ",
		'zh-tw': "飄飄雛",
		th: "ฮิราฮินะ",
		id: "Flittle"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [955],
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "お腹の ヒラヒラから 放射する サイコパワーで わずか １センチだけ つま先が 地面から 浮いている。",
		'zh-tw': "從肚子的褶邊放射出的精神力量，能夠讓牠浮在腳尖和地面 距離僅有區區１公分的空中。",
		th: "พลังจิตที่ปลดปล่อยออกมาจากส่วนที่พลิ้วไหวบริเวณท้องจะทำให้นิ้วเท้าลอยจากพื้นเพียง 1 เซนติเมตร",
		id: "Dengan kekuatan psikokinesis yang dipancarkan dari embel-embel di perutnya, ujung kaki Flittle melayang di udara hanya setinggi 1 cm."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かいてんアタック",
			'zh-tw': "迴轉攻擊",
			th: "โจมตีหมุนวน",
			id: "Serangan Berputar"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card