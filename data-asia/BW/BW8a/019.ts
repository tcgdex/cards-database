import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゼクロム"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [644],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "稲妻で 世界を 焼き尽くせる 伝説の ポケモン。 理想の 世界を つくる 人を 補佐する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "マッハクロー"
		},

		effect: {
			ja: "このワザのダメージは抵抗力の計算をしない。"
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "クロスサンダー"
		},

		effect: {
			ja: "自分のベンチに「レシラム」がいるなら、40ダメージを追加。"
		},

		damage: "80+",
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567862, tcgplayer: 602237, cardtrader: 142994 }, stamp: ["1st-edition"] }
	]
}

export default card
