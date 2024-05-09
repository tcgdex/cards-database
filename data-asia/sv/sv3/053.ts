import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ボチ"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [971],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "人と 関わることなく 命を 落とした 野良の 犬ポケモンが 生まれ変わったと 言われている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "じゃれつく"
		},

		damage: "30＋",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 3
}

export default card