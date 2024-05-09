import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "トサキント"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "saino misaki",
	dexId: [118],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "背びれ 胸びれ 尾びれが 優雅に たなびくので 水の踊り子 と呼ばれる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おまつりおんど"
		},

		effect: {
			ja: "場に「お祭り会場」が出ているなら、このポケモンは、持っているワザを2回連続で使える。（1回目のワザで相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出たあと、2回目のワザを使う。）"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うずしお"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card
