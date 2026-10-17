import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "マニューラ"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [461],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		ja: "ニューラ"
	},

	description: {
		ja: "ツメで 石に サインを残し コミュニケーションを とりながら 連携プレイで 敵を 追いこむ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "あられ"
		},

		effect: {
			ja: "相手のポケモン全員に、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "スケープゴート"
		},

		effect: {
			ja: "自分の手札からポケモンを好きなだけトラッシュし、トラッシュしたポケモンの枚数×30ダメージ。"
		},

		damage: "30×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567876, tcgplayer: 602260, cardtrader: 143007 }, stamp: ["1st-edition"] }
	]
}

export default card
