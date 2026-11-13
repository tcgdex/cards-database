import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "シャリタツ"
	},

	illustrator: "Jerky",
	rarity: "None",
	category: "Pokemon",
	dexId: [978],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "非常に 悪賢い ポケモン。 弱ったふりで 獲物を おびき寄せ 仲間の ポケモンに 襲わせる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きゃくよせ"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を上から6枚見て、その中からサポートを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
		}
	}],

	attacks: [{
		name: {
			ja: "なみのり"
		},

		damage: 50,
		cost: ["Fire", "Water"]
	}],

	retreat: 1,
	regulationMark: "H",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846826,
				tcgplayer: 660126,
				cardtrader: 345817,
			},
		},
	]
}

export default card
