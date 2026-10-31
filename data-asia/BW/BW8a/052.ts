import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒードランEX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [485],
	hp: 180,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			ja: "ヒートボイラー"
		},

		effect: {
			ja: "このポケモンが特殊状態なら、60ダメージを追加。"
		},

		damage: "60+",
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "ダイナマイトプレス"
		},

		effect: {
			ja: "このポケモンに「プラズマエネルギー」がついているなら、相手のバトルポケモンにのっているダメカンの数×10ダメージを追加。"
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567896, tcgplayer: 602240, cardtrader: 143027 }, stamp: ["1st-edition"] }
	]
}

export default card
