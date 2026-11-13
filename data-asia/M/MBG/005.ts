import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンカラス"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	dexId: [430],
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		ja: "ヤミカラス"
	},

	description: {
		ja: "情け容赦ない 性格。 子分の ヤミカラスの 失敗は 絶対に 許さないと 言われる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "やみのかぜ"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			ja: "スナイプフェザー"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846822,
				tcgplayer: 660122,
				cardtrader: 345813,
			},
		},
	]
}

export default card
