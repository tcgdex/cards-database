import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "カミッチュ"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Saboteri",
	dexId: [1011],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "頭を 出している そとッチュと 尻尾を 出している なかッチュが 助け合い りんごのなかで 暮らす。"
	},

	stage: "Stage1",

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
		cost: ["Grass"],

		name: {
			ja: "ともだちのわ"
		},

		damage: "20×",

		effect: {
			ja: "自分のベンチポケモンの数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card
