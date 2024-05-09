import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ナマケロ"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [287],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "１日のうち ２０時間 眠る。 見ている 相手の 眠気を 誘うのも 能力の ひとつ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "あくび"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card