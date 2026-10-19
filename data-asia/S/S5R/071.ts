import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [402],
	rarity: "Ultra Rare",
	set: Set,

	name: {
		ja: "コロトックV"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エキサイトステージ"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。このポケモンがバトル場にいるなら、4枚になるように引く。この番、すでに別の「エキサイトステージ」を使っていたなら、この特性は使えない。"
		}
	}],

	attacks: [{
		name: {
			ja: "シザークロス"
		},

		effect: {
			ja: "コインを1回投げオモテなら、80ダメージ追加。"
		},

		damage: "80+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: {
			cardmarket: 538663, tcgplayer: 569112, cardtrader: 240082 } }
	]
}

export default card