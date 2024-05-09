import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ロズレイド"
	},

	illustrator: "Gapao",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [407],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "かぐわしい 花の 香りで 相手を 惑わせ いばらの ムチで 激しく 打ちつける。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくのトゲ"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "しばりつける"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card