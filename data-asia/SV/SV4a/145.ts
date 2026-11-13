import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "カビゴン"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "None",
	category: "Pokemon",
	dexId: [143],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "頑丈な 胃袋は カビの 生えたものや 腐ったものを 食べても 壊れることはない。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "くいいじ"
		},

		effect: {
			ja: "自分の番に1回使える。自分のトラッシュから「たべのこし」を2枚まで選び、相手に見せて、手札に加える。"
		}
	}],

	attacks: [{
		name: {
			ja: "バッタンプレス"
		},

		effect: {
			ja: "このポケモンにも30ダメージ。"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746527,
				tcgplayer: 567546,
				cardtrader: 269781,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577377,
			},
		},
	]
}

export default card
