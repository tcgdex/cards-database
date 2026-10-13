import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ワルビアル"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [553],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		ja: "ワルビル"
	},

	description: {
		ja: "とても 凶暴な ポケモン。 目の前で 動くものは すべて 襲いかかり かみくだこうとする。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "ピストンヘッド"
		},

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			ja: "ぶちかます"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	retreat: 3,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567880, tcgplayer: 602251, cardtrader: 143011 }, stamp: ["1st-edition"] }
	]
}

export default card
