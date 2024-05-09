import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "オニスズメ"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [21],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "羽が 短く 長い 距離を 飛べない。 せわしなく 動き まわって むしポケモンを ついばむ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ぬけがけしんか"
		},

		effect: {
			ja: "このポケモンは、後攻プレイヤーの最初の番なら、出したばかりでも進化できる。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スピードひこう"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card