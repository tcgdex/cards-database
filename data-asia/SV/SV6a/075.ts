import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペルシアン"
	},

	illustrator: "Whisker",
	category: "Pokemon",
	dexId: [53],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "気性が 激しく 尻尾を まっすぐ 立てたら 要注意。 とびかかって 噛みつく 前触れだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "みだれひっかき"
		},

		damage: "50×",

		effect: {
			ja: "コインを3回投げ、オモテの数×50ダメージ。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スラッシュクロー"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card