import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラティオスEX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [381],
	hp: 170,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			ja: "おんそくひこう"
		},

		effect: {
			ja: "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			ja: "ラスターパージ"
		},

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュする。"
		},

		damage: 150,
		cost: ["Water", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Dragon",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567883, tcgplayer: 602234, cardtrader: 143014 }, stamp: ["1st-edition"] }
	]
}

export default card
