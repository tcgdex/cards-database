import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラッキー"
	},

	illustrator: "Taiga Kayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [113],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "傷ついた ポケモンや 人がいると 栄養満点の タマゴを産み 分け与える 優しい ポケモン。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ラッキーボーナス"
		},

		effect: {
			ja: "自分の番に、ウラになっている自分のサイドからこのカードをとったとき、自分のベンチに空きがあるなら、手札に加える前に使える。このポケモンを自分のベンチに出す。その後、コインを1回投げオモテなら、さらにサイドを1枚とる。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ひっぱたく"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card