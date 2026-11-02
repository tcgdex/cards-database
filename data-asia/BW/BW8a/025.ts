import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "デオキシスEX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [386],
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "パワーコネクト"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の「プラズマ団」のポケモン（「デオキシスEX」はのぞく）が使うワザの、バトルポケモンへのダメージは「+10」される。"
		}
	}],

	attacks: [{
		name: {
			ja: "ラセンフォース"
		},

		effect: {
			ja: "このポケモンに「プラズマエネルギー」がついているなら、相手のバトルポケモンについているエネルギーの数×30ダメージを追加。"
		},

		damage: "30+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567868, tcgplayer: 602230, cardtrader: 143000 }, stamp: ["1st-edition"] }
	]
}

export default card
