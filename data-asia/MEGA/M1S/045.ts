import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ブーピッグ"
	},
	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	description: {
		ja: "相手を操るときの不思議なステップは昔外国で大流行したことがある。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "バネブー"
	},
	abilities: [{
		type: "Ability",
		name: {
			ja: "エナジーステップ"
		},
		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札の上から4枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。"
		}
	}],
	attacks: [{
		name: {
			ja: "ねんどうだん"
		},
		damage: 60,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [326]
}

export default card
