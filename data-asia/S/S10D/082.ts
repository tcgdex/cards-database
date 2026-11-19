import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "オリジンディアルガVSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [483],
	hp: 280,
	types: ["Metal"],

	evolveFrom: {
		ja: "オリジンディアルガV"
	},

	stage: "VSTAR",

	attacks: [{
		name: {
			ja: "メタルブラスト"
		},

		effect: {
			ja: "このポケモンについている{M}エネルギーの数×40ダメージ追加。"
		},

		damage: "40+",
		cost: ["Colorless"]
	}, {
		name: {
			ja: "スタークロノス"
		},

		effect: {
			ja: "この番が終わったら、もう1回自分の番を始める。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		damage: 220,
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651324,
				tcgplayer: 569837,
				cardtrader: 234224,
			},
		},
	]
}

export default card
