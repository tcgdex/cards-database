import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "グレイシア"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [471],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		ja: "イーブイ"
	},

	description: {
		ja: "体温を さげることで 全身の 体毛を 凍らせて 鋭く とがった ハリのようにして 飛ばす。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フリーズゾーン"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の「プラズマ団」のポケモン全員のにげるために必要なエネルギーは、それぞれ2個ぶん少なくなる。"
		}
	}],

	attacks: [{
		name: {
			ja: "こごえるかぜ"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567855, tcgplayer: 602231, cardtrader: 142987 }, stamp: ["1st-edition"] }
	]
}

export default card
