import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "セグレイブ"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [998],
	hp: 160,
	types: ["Water"],

	description: {
		ja: "極低温の 冷気を 口から 噴射。 灼熱の マグマでも 瞬時に 凍りつかせてしまう。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きょくていおん"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "バスターテール"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card