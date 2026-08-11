import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カエンジシ"
	},
	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	description: {
		'ja-jp': "オスの たてがみは 戦いになると 摂氏２０００度の 高温になる。 近寄るだけで 大火傷だ。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840557,
				tcgplayer: 647265,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シシコ"
	},
	abilities: [{
		type: "Ability",
		name: {
			'ja-jp': "いかくのキバ"
		},
		effect: {
			'ja-jp': "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは「-30」される。"
		}
	}],
	attacks: [{
		name: {
			'ja-jp': "やきこがす"
		},
		damage: 70,
		effect: {
			'ja-jp': "相手のバトルポケモンをやけどにする。"
		},
		cost: ["Fire", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [668]
}

export default card
