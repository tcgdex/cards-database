import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ザシアン"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [888],
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "あらゆるものを 切り捨てるさまから 妖精王の剣 と 呼ばれ 敵味方に 恐れ崇められた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "てつのほうこう"
		},

		damage: 30,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、ベンチポケモンにつける。"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "ブレイブキャリバー"
		},

		damage: 130,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2
}

export default card