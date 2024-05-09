import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "チョンチー"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [170],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "暗い 海底では いつも 点滅している 触手の 灯り だけが 通信手段。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "てらす"
		},

		effect: {
			ja: "自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードを山札の下にもどす。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "プチでんき"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card