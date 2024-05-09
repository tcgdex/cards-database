import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ホイーガ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Krgc",
	dexId: [544],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "高速で 回転し 相手に 突撃。 最高時速は およそ １００キロに 達する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ポイズンサークル"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "かいてんアタック"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card
