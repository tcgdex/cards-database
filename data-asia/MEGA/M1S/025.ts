import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "モスノウ"
	},
	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	description: {
		ja: "触角で大気の流れを察知する。りんぷんに冷気を織り交ぜ雪のように降らせる。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "ユキハミ"
	},
	attacks: [{
		name: {
			ja: "こごえるはばたき"
		},
		effect: {
			ja: "相手のポケモン全員に、それぞれ20ダメージ。相手のバトルポケモンをねむりにする。[ベンチは弱点・抵抗力を計算しない。]"
		},
		cost: ["Water"]
	}],
	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [873]
}

export default card
