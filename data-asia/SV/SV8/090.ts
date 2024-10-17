import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤレユータン"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	dexId: [765],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "森の奥で 静かに 暮らす。 マントのような 紫の 毛は 歳を 重ねるほどに 長くなる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "よわみをにぎる"
		},

		effect: {
			ja: "次の自分の番の終わりまで、このワザを受けたポケモンの弱点はタイプになる。［弱点は「×2」でダメージ計算をする。］"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ひらてうち"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card