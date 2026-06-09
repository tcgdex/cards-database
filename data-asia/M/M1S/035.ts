import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "エレザード"
	},
	illustrator: "Nakamura Ippan",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	description: {
		ja: "襟巻を広げて太陽光を浴びると大都会で使われる電気を1匹で発電する。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "エリキテル"
	},
	attacks: [{
		name: {
			ja: "せんこうだん"
		},
		damage: 20,
		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			ja: "ヘッドボルト"
		},
		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [695]
}

export default card
