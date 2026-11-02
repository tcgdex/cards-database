import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンダース"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [135],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		ja: "イーブイ"
	},

	description: {
		ja: "体内に 電気を ためることで 逆立てた 全身の 体毛を ミサイルのように 次々 飛ばす。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ミサイルばり"
		},

		effect: {
			ja: "コインを4回投げ、オモテの数×20ダメージ。"
		},

		damage: "20×",
		cost: ["Colorless"]
	}, {
		name: {
			ja: "エレキディヒューズ"
		},

		effect: {
			ja: "次の相手の番、このワザを受けた相手の「ポケモンEX」は、ワザを使えない。"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567859, tcgplayer: 602249, cardtrader: 142991 }, stamp: ["1st-edition"] }
	]
}

export default card
