import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ユンゲラー"
	},
	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	description: {
		ja: "念力の威力は絶大。進化に備えて額の星にサイコパワーを蓄えている。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "ケーシィ"
	},
	abilities: [{
		type: "Ability",
		name: {
			ja: "サイコドロー"
		},
		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を2枚引く。"
		}
	}],
	attacks: [{
		name: {
			ja: "ちょうねんりき"
		},
		damage: 30,
		cost: ["Psychic"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [64]
}

export default card
