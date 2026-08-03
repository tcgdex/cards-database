import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "リザードンex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "れんごくしはい"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「基本エネルギー」を3枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "バーニングダーク"
		},

		damage: "180＋",

		effect: {
			ja: "相手がすでにとったサイドの枚数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 724995,
				tcgplayer: 567093,
			},
		},
	],

	retreat: 2,
}

export default card