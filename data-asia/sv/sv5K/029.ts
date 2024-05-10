import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドータクン",
		'zh-tw': "青銅鐘",
		th: "โดทาคุน"
	},

	illustrator: "Katsunori Sato",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [437],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "雨雲を 呼べる ポケモンとして 大昔から 祀られていた。 ときどき 地面に 埋められている。",
		'zh-tw': "從遙遠的過去開始就被人當成能召喚雨雲的寶可夢而供奉著。 有時候會被埋進地下。",
		th: "ได้รับการบูชาในฐานะโปเกมอนผู้เรียกเมฆฝนมาตั้งแต่อดีตกาล บางครั้งถูกฝังอยู่ในพื้นดิน"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "しんかジャマー",
			'zh-tw': "進化妨礙者",
			th: "ขัดขวางการวิวัฒนาการ"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、相手は手札からポケモンを出して進化させられない。",
			'zh-tw': "在下個對手的回合，對手無法從手牌使出寶可夢並完成進化。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม ฝ่ายตรงข้ามนำโปเกมอนจากบนมือออกมาวิวัฒนาการไม่ได้"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ちょうねんりき",
			'zh-tw': "超念力",
			th: "ซูเปอร์โทรจิต"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card