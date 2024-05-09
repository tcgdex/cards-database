import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ホーホー"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [163],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "いつも 一本足で 立っている。 脚を 入れ替える 瞬間は 素早くて なかなか 見られない。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "サイレントウイング"
		},

		damage: 20,

		effect: {
			ja: "相手の手札を見る。"
		}
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