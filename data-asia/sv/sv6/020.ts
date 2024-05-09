import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ランプラー"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Rond",
	dexId: [608],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "魂を 吸いとり 火を灯す。 人が 死ぬのを 待つため 病院を うろつくようになった。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひだね"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "もえつくす"
		},

		damage: 60,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card
