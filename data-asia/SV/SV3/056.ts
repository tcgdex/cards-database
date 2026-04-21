import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "サナギラス",
		'zh-tw': "沙基拉斯",
		th: "ซานากิราส"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [247],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "体内で 圧縮させた ガスを 勢いよく 噴出させ 飛んで 暴れまわる サナギだ。",
		'zh-tw': "會以強勁的力道噴出在體內壓縮好的氣體，好讓自己能飛在空中大搞破壞的蛹。",
		th: "เป็นดักแด้ที่บินและอาละวาดไปมาโดยการพ่นแก๊สที่อัดแน่นอยู่ภายในร่างกายออกมาอย่างรุนแรง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわおとし",
			'zh-tw': "落石",
			th: "หินผาถล่ม"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ふんしゃタックル",
			'zh-tw': "噴射衝撞",
			th: "พ่นกระแทก"
		},

		damage: 60,

		effect: {
			ja: "自分のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว ก็จะได้รับแดเมจ 20 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 724003
	}
}

export default card