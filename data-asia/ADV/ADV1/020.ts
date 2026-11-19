import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "サメハダー"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [319],
	hp: 70,
	types: ["Water"],

	evolveFrom: {
		ja: "キバニア"
	},

	stage: "Stage1",

	abilities: [{
		type: "Poke-BODY",

		name: {
			ja: "さめはだ"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のワザによるダメージを受けたとき(このポケモンがきぜつしても)、そのワザを使ったポケモンにダメージカウンターを2個のせる。"
		}
	}],

	attacks: [{
		name: {
			ja: "ダークスラッシュ"
		},

		effect: {
			ja: "のぞむなら、自分の{D}エネルギーを1個トラッシュしてよい。トラッシュしたなら、30ダメージを追加する。"
		},

		damage: "40+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784504,
				tcgplayer: 613075,
				cardtrader: 138004,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784504,
				tcgplayer: 613075,
				cardtrader: 138004,
			},
		},
	]
}

export default card
