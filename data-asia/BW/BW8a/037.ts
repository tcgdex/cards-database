import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハガネール"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [208],
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		ja: "イワーク"
	},

	description: {
		ja: "土と 一緒に 飲みこんだ 鋼が 体を 変化させて ダイヤモンドより 固くなった。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "メタルディフェンダー"
		},

		effect: {
			ja: "次の相手の番、このポケモンの弱点はなくなる。"
		},

		damage: 50,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "ヘビーインパクト"
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	retreat: 4,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567881, tcgplayer: 602258, cardtrader: 143012 }, stamp: ["1st-edition"] }
	]
}

export default card
