import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "バリヤード"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [122],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "指先を 細かく ふるわせて 空気中の 分子の 動きを 止めて 見えない壁を 作るのだ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ベンチバリア"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、ワザのダメージを受けない。"
		}
	}],

	attacks: [{
		name: {
			ja: "ねんりき"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567866, tcgplayer: 602252, cardtrader: 142998 }, stamp: ["1st-edition"] }
	]
}

export default card
