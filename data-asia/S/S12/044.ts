import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大宇怪",
		th: "โอเบ็ม",
		ja: "オーベム"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "如果大宇怪出現在牧場裡，那麼就會有１隻毛毛角羊 在不知不覺間消失。",
		th: "ไบวูลูจะหายไป 1 ตัวโดยไม่ทันรู้ตัวจากฟาร์มที่โอเบ็มปรากฏตัว",
		ja: "オーベムが 現れた 牧場 からは いつの間にか バイウールーが １匹 姿を 消してしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "念動彈",
			th: "บอลโทรจิต",
			ja: "ねんどうだん"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "精神箭",
			th: "ไซโคแอโรว์",
			ja: "サイコアロー"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到60點傷害。這個招式的傷害，就算在備戰區也計算弱點・抵抗力。",
			th: "ทำแดเมจ 60 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว แดเมจของท่าต่อสู้นี้ แม้จะเป็นโปเกมอนบนเบนช์ก็จะนำจุดอ่อนและความต้านทานมาคิด",
			ja: "相手のポケモン1匹に、60ダメージ。このワザのダメージは、ベンチでも弱点・抵抗力を計算する。"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [606],

	thirdParty: {
		cardmarket: 680183
	}
}

export default card