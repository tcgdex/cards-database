import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "カクレオン"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [352],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "体の 色を 自由に 変える 能力を 持つ。 お腹にある ギザギザ模様 だけは 変わらない。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "へんしょく"
		},

		effect: {
			ja: "このポケモンは、バトル場にいるかぎり、相手のバトルポケモンと同じタイプになる。"
		}
	}],

	attacks: [{
		name: {
			ja: "コピる"
		},

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。選んだワザに必要なエネルギーが、このポケモンについているなら、選んだワザをこのワザとして使う。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567890, tcgplayer: 602250, cardtrader: 143021 }, stamp: ["1st-edition"] }
	]
}

export default card
