import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "アヤシシV"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [899],
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フロンティアロード"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。"
		}
	}],

	attacks: [{
		name: {
			ja: "バリアーラッシュ"
		},

		effect: {
			ja: "このポケモンについているエネルギーの数×40ダメージ。"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651318,
				tcgplayer: 569831,
				cardtrader: 234218,
			},
		},
	]
}

export default card
