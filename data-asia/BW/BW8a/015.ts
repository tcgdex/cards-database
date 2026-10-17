import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガマゲロゲ"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [537],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		ja: "ガマガル"
	},

	description: {
		ja: "コブに 力を いれることで バイブレーションが 発生して パンチの 威力が アップする。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "グラグラパンチ"
		},

		effect: {
			ja: "おたがいのベンチポケモン全員にも、それぞれ30ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "スプラッシュターン"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567858, tcgplayer: 602257, cardtrader: 142990 }, stamp: ["1st-edition"] }
	]
}

export default card
