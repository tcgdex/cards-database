import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "プクリン"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	dexId: [40],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "キメ細やかな 毛皮の 持ち主。 怒らせると どんどん ふくらみ のしかかってくるので 注意。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "バルーンセラピー"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「セラピーエネルギー」を1枚選び、自分のポケモンにつける。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "マジカルショット"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card