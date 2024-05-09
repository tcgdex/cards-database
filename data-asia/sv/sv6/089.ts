import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "スワンナ"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Susumu Maeya",
	dexId: [581],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "薄明の中で 踊る 美しい ダンスから 多くの 芸術家が インスピレーションを 受けたという。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "とうしのつばさ"
		},

		damage: "20＋",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぜおこし"
		},

		damage: 70
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
