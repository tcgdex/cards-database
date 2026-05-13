import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "キテルグマ"
	},
	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	description: {
		ja: "格闘家顔負けの技で仕留めた獲物を両脇に抱えてすみかへ持ち帰る。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "ヌイコグマ"
	},
	attacks: [{
		name: {
			ja: "げんこつ"
		},
		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "ひっさつラリアット"
		},
		damage: "100+",
		effect: {
			ja: "コインを2回投げ、すべてオモテなら、100ダメージ追加。"
		},
		cost: ["Colorless", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [760]
}

export default card
