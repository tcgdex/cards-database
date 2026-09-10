import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	regulationMark: "G",
	rarity: "Special illustration rare",
	dexId: [918],
	evolveFrom: { ja: "タマンチュラ" },
	set: Set,

	name: {
		ja: "ワナイダーex"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "トラップテリトリー"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のバトルポケモンのにげるためのエネルギーは、1個ぶん多くなる。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ワイヤーハング"
		},

		damage: "90＋",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardtrader: 235678,
				cardmarket: 693176,
				tcgplayer: 568327,
			},
		},
	],

	retreat: 2
}

export default card