import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		ja: "ネクロズマV"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [800],
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "プリズムレイ"
		},

		effect: {
			ja: "相手のベンチポケモン2匹にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			ja: "スペシャルレーザー"
		},

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、120ダメージ追加。"
		},

		damage: "100+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538683, tcgplayer: 569116, cardtrader: 240086 } }
	]
}

export default card
