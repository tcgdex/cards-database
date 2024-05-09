import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "バリヤード"
	},

	illustrator: "OOYAMA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [122],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "パントマイムが 得意。 指から 出した 波動で 壁を つくり あまたの 攻撃から 身を守る。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ものまねバリア"
		},

		effect: {
			ja: "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、このポケモンは、相手のポケモンからワザのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サイコパワー"
		},

		effect: {
			ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card