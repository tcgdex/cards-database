import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ケッキング"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [289],
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ヤルキモノ"
	},

	stage: "Stage2",

	abilities: [{
		type: "Poke-BODY",

		name: {
			ja: "なまけがお"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のポケモン全員は、ポケパワーを使うことができない。"
		}
	}],

	attacks: [{
		name: {
			ja: "はめつのいちげき"
		},

		effect: {
			ja: "自分の基本エネルギーを1個トラッシュする。次の自分の番、自分はワザを使うことができない。(トラッシュできないなら、このワザは失敗する。)"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784527,
				tcgplayer: 613064,
				cardtrader: 138027,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784527,
				tcgplayer: 613064,
				cardtrader: 138027,
			},
		},
	]
}

export default card
