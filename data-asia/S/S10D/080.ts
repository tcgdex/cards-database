import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ドレディアVSTAR"
	},
	illustrator: "5ban Graphics",

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [549],
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		ja: "ヒスイ ドレディアV"
	},

	stage: "VSTAR",

	abilities: [{
		type: "Ability",

		name: {
			ja: "スターパフューム"
		},

		effect: {
			ja: "自分の番に使える。自分の山札から{G}ポケモンと{G}エネルギーを合計5枚まで選び、相手に見せて、手札に加える。そして山札を切る。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	attacks: [{

		name: {
			ja: "キャメルスピン"
		},

		effect: {
			ja: "のぞむなら、このポケモンについているエネルギーを1個選び、手札にもどす。その場合、100ダメージ追加。"
		},

		damage: "130+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651322,
				tcgplayer: 569835,
				cardtrader: 234222,
			},
		},
	]
}

export default card