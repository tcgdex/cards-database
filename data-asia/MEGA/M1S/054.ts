import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ミミロップ"
	},
	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	description: {
		ja: "暑い季節が終わると空気をたくさん含んだ体毛に生え変わり寒さに備える。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "ミミロル"
	},
	attacks: [{
		name: {
			ja: "とびだしキック"
		},
		damage: 50,
		effect: {
			ja: "相手のベンチポケモン1匹に、50ダメージ。[ベンチは弱点・抵抗力を計算しない。]"
		},
		cost: ["Colorless"]
	}, {
		name: {
			ja: "かいてんげり"
		},
		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [428]
}

export default card
