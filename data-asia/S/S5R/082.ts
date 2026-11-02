import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [494],
	evolveFrom: { ja: "ビクティニV" },
	rarity: "Secret Rare",
	set: Set,

	name: {
		ja: "ビクティニVMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 310,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			ja: "ひろがるほのお"
		},

		effect: {
			ja: "自分のトラッシュから[炎]エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ダイビクトリー"
		},

		effect: {
			ja: "相手のバトルポケモンが「ポケモンV」なら、120ダメージ追加。"
		},

		damage: "100+",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538718, tcgplayer: 569123, cardtrader: 240094 } }
	]
}

export default card