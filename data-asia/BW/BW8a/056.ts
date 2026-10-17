import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "エンペルト"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [395],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		ja: "ポッタイシ"
	},

	description: {
		ja: "通常とは 色の 異なる とても 珍しい ポケモン。 出会うことは かなり 難しい。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ダイビングドロー"
		},

		effect: {
			ja: "自分の手札を1枚選び、トラッシュする。その後、自分の山札を2枚引く。この特性は、自分の番に1回使える。"
		}
	}],

	attacks: [{
		name: {
			ja: "アタックコマンド"
		},

		effect: {
			ja: "おたがいの場にいるポケモンの数×10ダメージ。"
		},

		damage: "10×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567900, tcgplayer: 602242, cardtrader: 143031 }, stamp: ["1st-edition"] }
	]
}

export default card
