import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロゾ",
		'zh-tw': "蚊香君",
		th: "เนียวโรโซ",
		id: "Poliwhirl"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	dexId: [61],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ぬめぬめとした 粘液状の 汗を かく。 敵に 捕まっても ぬるりと すり抜け 逃げるのだ。",
		'zh-tw': "流的汗是又黏又滑的黏液狀。即使被敵人捉住，也能滑溜溜地輕易逃脫。",
		th: "ขับเหงื่อที่มีลักษณะเป็นเมือกเหนียวเหนอะออกมา ถึงจะโดนศัตรูจับตัว ก็สามารถลื่นไหลหนีออกมาได้",
		id: "Poliwhirl mengalirkan keringat berlendir yang licin. Meskipun ditangkap musuh, Pokémon ini dapat meloloskan diri dan kabur berkat kelicinannya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "スプラッシュ",
			'zh-tw': "飛濺",
			th: "สแปลช",
			id: "Splash"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "かえるとび",
			'zh-tw': "蛙跳",
			th: "กระโดดกบ",
			id: "Lompat Katak"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、60ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 60",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 60."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card