import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "キレイハナ"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [182],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "ときおり キレイハナが 集まって 踊るような しぐさを みせる。 太陽を呼ぶ 儀式と 言われる。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ねむりごな"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "パワフルダンス"
		},

		damage: "90×",

		effect: {
			ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×90ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card