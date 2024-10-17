import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンファン"
	},

	illustrator: "GOSSAN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [232],
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "普段は 落ち着いているが 一度 怒らせると 体を 丸めて 回転しながら 突っ込んでくる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "うちのめす"
		},

		damage: 40,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ガードローリング"
		},

		damage: 120,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。次の相手の番、このポケモンが受けるワザのダメージは「-100」される。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card