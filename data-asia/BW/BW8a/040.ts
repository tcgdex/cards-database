import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "コラッタ"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [19],
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "１日中 エサを 探している。 キバは 死ぬまで 伸び続けるので 硬いものを かじって 削る。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "とびかかる"
		},

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567884, tcgplayer: 602220, cardtrader: 143015 }, stamp: ["1st-edition"] }
	]
}

export default card
