import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "エビワラー"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [107],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "空気をも 切り裂く パンチ。 だが ３分間 攻撃すると ひと休み したくなるらしい。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はんげき"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "エキサイトパンチ"
		},

		damage: 60,

		effect: {
			ja: "次の自分の番、このポケモンの「エキサイトパンチ」のダメージは「+60」される。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1
}

export default card