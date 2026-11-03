import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "チオンジェンex"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [1001],
	hp: 230,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "むさぼるつた"
		},

		effect: {
			ja: "相手のベンチポケモン1匹に、相手がすでにとったサイドの枚数×60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			ja: "フォレストバーン"
		},

		damage: 220
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747709,
				tcgplayer: 567752,
				cardtrader: 270348,
			},
		},
	],

	retreat: 4
}

export default card