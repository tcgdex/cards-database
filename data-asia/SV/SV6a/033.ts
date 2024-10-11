import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "マーイーカ"
	},

	illustrator: "Mori Yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [686],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "回転しながら 発光体を 点滅。 光の パターンで 仲間と コミュニケーションする。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "いたずらしょくしゅ"
		},

		effect: {
			ja: "相手の山札を上から1枚見て、もとにもどす。のぞむなら、その山札を切る。"
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "つつく"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card