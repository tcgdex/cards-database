import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "キングドラ"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [230],
	hp: 140,
	types: ["Dragon"],

	evolveFrom: {
		ja: "シードラ"
	},

	description: {
		ja: "海底洞くつに 住んでいる。 キングドラが 身動きすると 巨大な 渦潮が 生まれる。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "りゅうのうず"
		},

		effect: {
			ja: "自分のトラッシュにある[水]エネルギーと[雷]エネルギーをすべて相手に見せて、そのエネルギーの枚数×20ダメージ。その後、見せたエネルギーを山札にもどし、山札を切る。"
		},

		damage: "20×",
		cost: ["Colorless"]
	}, {
		name: {
			ja: "トライバレット"
		},

		effect: {
			ja: "相手のポケモンを3匹選び、それぞれに30ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Dragon",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567882, tcgplayer: 602233, cardtrader: 143013 }, stamp: ["1st-edition"] }
	]
}

export default card
