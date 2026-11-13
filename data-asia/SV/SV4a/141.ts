import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "プクリンex"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [40],
	hp: 250,
	types: ["Colorless"],

	evolveFrom: {
		ja: "プリン"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふくらむボディ"
		},

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、このポケモンの最大HPは「＋100」される。"
		}
	}],

	attacks: [{
		name: {
			ja: "フレンドタックル"
		},

		effect: {
			ja: "この番、手札からサポートを出して使っていたなら、90ダメージ追加。"
		},

		damage: "90+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746523,
				tcgplayer: 567542,
				cardtrader: 269796,
			},
		},
	]
}

export default card
