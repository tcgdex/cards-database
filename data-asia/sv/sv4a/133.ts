import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "サーフゴー"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [1000],
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "１０００枚の コインで 体が できているらしい。 人懐こく だれとでも すぐに 仲良くなれる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おおばんぶるまい"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を好きなだけ選び、自分のポケモンに好きなようにつける。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ゴージャスサーフ"
		},

		damage: "80×",

		effect: {
			ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。"
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