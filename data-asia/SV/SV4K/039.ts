import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ジオヅム",
		'zh-tw': "鹽石壘",
		th: "จีโอซึมู",
		ko: "스태솔트"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [933],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "塩を 噴き出して 獲物に 浴びせ 塩漬けにしてしまう。 体内の 水分を 奪ってしまうのだ。",
		'zh-tw': "會將鹽噴向獵物，將其做成醃漬物。獵物體內的水分 會在醃漬過程中被奪走。",
		th: "พ่นเกลือใส่เหยื่อเพื่อหมักอีกฝ่ายด้วยเกลือ ช่วงชิงน้ำภายในร่างกายของอีกฝ่ายไป",
		ko: "분출한 소금을 먹이에게 끼얹어서 소금절이로 만들어 버린다. 체내의 수분을 빼앗는 것이다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "がんせきタックル",
			'zh-tw': "巨岩衝撞",
			th: "ร็อกแท็กเกิล",
			ko: "암석태클"
		},

		damage: 80,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			ko: "이 포켓몬에게도 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card