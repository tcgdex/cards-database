import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ホーホー"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	dexId: [163],
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "いつも 一本足で 立っている。 脚を 入れ替える 瞬間は 素早くて なかなか 見られない。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "みはりばん"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、自分のベンチポケモンについている基本エネルギーは、相手のグッズまたはサポートによる、トラッシュする効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "はばたく"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609841,
				tcgplayer: 570643,
			},
		},
	],

	retreat: 1,
}

export default card