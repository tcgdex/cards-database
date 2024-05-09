import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "アイアント"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [632],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "大きな顎は 岩石をも かみ砕く。 サダイジャから タマゴを 守るため 群れで 戦う。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "むらがるいかり"
		},

		damage: "20×",

		effect: {
			ja: "自分の場の「アイアント」全員にのっているダメカンの数×20ダメージ。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ハードシザー"
		},

		damage: 80,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1
}

export default card