import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドードー",
		'zh-tw': "嘟嘟",
		th: "โดโด",
		id: "Doduo"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [84],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "２つの 頭の 脳みそは テレパシーのような 力で 気持ちを 通じ合わせているらしい。",
		'zh-tw': "２個腦袋好像會用 類似心靈感應的力量， 來傳遞彼此的想法。",
		th: "ดูเหมือนว่าสมองในหัวทั้งสองนั้นจะสื่อความรู้สึกถึงกันได้ด้วยพลังคล้ายโทรจิต",
		id: "Kabarnya otak pada 2 kepala Doduo saling menyalurkan perasaan dengan kekuatan yang seperti telepati."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			th: "ประจัญบาน",
			id: "Menyerang"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Lightning",
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