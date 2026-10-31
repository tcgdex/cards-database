import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "シンボラー"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [561],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "通常とは 色の 異なる とても 珍しい ポケモン。 出会うことは かなり 難しい。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しんぴのまもり"
		},

		effect: {
			ja: "このポケモンは、「ポケモンEX」からワザのダメージや効果を受けない。"
		}
	}],

	attacks: [{
		name: {
			ja: "サイコキネシス"
		},

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×10ダメージを追加。"
		},

		damage: "50+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567901, tcgplayer: 602243, cardtrader: 143032 }, stamp: ["1st-edition"] }
	]
}

export default card
