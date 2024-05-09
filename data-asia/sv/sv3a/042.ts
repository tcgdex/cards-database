import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジラーチ"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [385],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "１０００年間で ７日だけ 目を 覚まし どんな 願い事でも かなえる 力を 使うという。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ステラヴェール"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のたねポケモンが使うワザの効果で、ダメカンがのらない。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エネチャージ"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
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