import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "メガユキノオーex"
	},
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 350,
	types: ["Water"],
	stage: "MEGA",
	evolveFrom: {
		ja: "ユキカブリ"
	},
	attacks: [{
		name: {
			ja: "アバランチハンマー"
		},
		damage: "100×",
		effect: {
			ja: "自分の山札を上から6枚トラッシュし、その中にある「基本水エネルギー」の枚数×100ダメージ。"
		},
		cost: ["Water", "Water"]
	}, {
		name: {
			ja: "フロストバリア"
		},
		damage: 200,
		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		},
		cost: ["Water", "Water", "Water"]
	}],
	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],
	retreat: 4,
	regulationMark: "I",
	rarity: "Secret Rare",
	suffix: "EX"
}

export default card
