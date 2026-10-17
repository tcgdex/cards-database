import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "デスカーン"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [563],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		ja: "デスマス"
	},

	description: {
		ja: "本物の かんおけと 間違え 近寄ってきた 墓ドロボウを 体の 中に 閉じこめてしまう。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ディープグレイブ"
		},

		effect: {
			ja: "この特性は、自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。ダメカン3個を、相手のポケモンに好きなようにのせる。"
		}
	}],

	attacks: [{
		name: {
			ja: "ふこうのビンタ"
		},

		effect: {
			ja: "次の相手の番、相手が投げるコインは、すべてウラとしてあつかう。"
		},

		damage: 70,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567870, tcgplayer: 602229, cardtrader: 143002 }, stamp: ["1st-edition"] }
	]
}

export default card
