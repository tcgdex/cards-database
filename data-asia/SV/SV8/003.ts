import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アイアントex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いきなりけずる"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手の山札を上から1枚トラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "リベンジクラッシュ"
		},

		damage: "120＋",

		effect: {
			ja: "相手がすでにとったサイドの枚数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card