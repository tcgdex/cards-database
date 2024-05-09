import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バニリッチ"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	dexId: [583],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "マイナス１００度の 冷気で 敵を 凍らせるが 命までは 奪わない 優しい 気質。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "フロストスマッシュ"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card