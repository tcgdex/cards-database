import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "メガニウム"
	},
	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	description: {
		ja: "メガニウムのそばにいると森林浴をしたようなすがすがしい気分になれる。"
	},
	stage: "Stage2",
	evolveFrom: {
		ja: "ベイリーフ"
	},
	abilities: [{
		type: "Ability",
		name: {
			ja: "おいしげる"
		},
		effect: {
			ja: "このポケモンがいるかぎり、自分のポケモン全員についている「基本草エネルギー」は、それぞれ草エネルギー2個ぶんとしてはたらく。この特製の効果は重ならない。"
		}
	}],
	attacks: [{
		name: {
			ja: "ソーラービーム"
		},
		damage: 140,
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [154]
}

export default card
