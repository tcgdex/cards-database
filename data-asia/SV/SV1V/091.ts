import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	evolveFrom: { ja: "タマンチュラ" },
	regulationMark: "G",
	rarity: "Ultra Rare",
	dexId: [918],
	set: Set,

	name: {
		ja: "ワナイダーex"
	},

	illustrator: "takuyoa",
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
				cardtrader: 235668,
				cardmarket: 693166,
				tcgplayer: 568317,
			},
		},
	],

	retreat: 2
}

export default card