import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "デンチュラ"
	},

	illustrator: "mashu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [596],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "電気を 帯びた お腹の 毛を 飛ばして 攻撃。 毛が 刺さると 三日三晩 全身が 痺れる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふくがん"
		},

		effect: {
			ja: "このポケモンが使うワザの、相手のバトル場の特性を持つポケモンへのダメージは「+50」される。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ビリビリウェブ"
		},

		damage: "50＋",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、80ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card