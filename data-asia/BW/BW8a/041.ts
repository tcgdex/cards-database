import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラッタ"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [20],
	hp: 70,
	types: ["Colorless"],

	evolveFrom: {
		ja: "コラッタ"
	},

	description: {
		ja: "意外と 凶暴な ポケモン。 長く 伸びた キバは 分厚い コンクリートも 簡単に 削る。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ジャンクトランス"
		},

		effect: {
			ja: "自分のトラッシュから「プラズマ団」のポケモンと、「プラズマ団」のトレーナーズと、「プラズマ団」のエネルギーを、それぞれ1枚ずつ選び、相手に見せてから、手札に加える。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "かみつく"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567885, tcgplayer: 602256, cardtrader: 143016 }, stamp: ["1st-edition"] }
	]
}

export default card
