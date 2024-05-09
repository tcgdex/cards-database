import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ミミズズ"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [968],
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "敵に 襲われると 体毛を こぶしのように 使い パンチの 嵐を お見舞いするのだ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "えいようてつぶん"
		},

		effect: {
			ja: "このポケモンにエネルギーが3個以上ついているなら、このポケモンの最大HPは「+100」される。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "つきぬける"
		},

		damage: 100,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
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