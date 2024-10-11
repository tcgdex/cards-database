import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "アブソル"
	},

	illustrator: "rika",
	rarity: "Common",
	category: "Pokemon",
	dexId: [359],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "風のように 野山を 駆けぬける。 弓なりの ツノは 自然災害の 予兆を 敏感に 感じとる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "バッドフォール"
		},

		damage: "20＋",

		effect: {
			ja: "自分の場にエネルギーが3個以上あるなら、50ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card