import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャスパー"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [677],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "無表情だが 内面では サイコパワーを 抑えこむのに 必死に なっているのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "みすかす"
		},

		effect: {
			ja: "相手の手札を見る。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコショット"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card