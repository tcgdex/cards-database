import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キテルグマ"
	},
	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	description: {
		'ja-jp': "格闘家顔負けの技で仕留めた獲物を両脇に抱えてすみかへ持ち帰る。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840615,
				tcgplayer: 647293,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌイコグマ"
	},
	attacks: [{
		name: {
			'ja-jp': "げんこつ"
		},
		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'ja-jp': "ひっさつラリアット"
		},
		damage: "100+",
		effect: {
			'ja-jp': "コインを2回投げ、すべてオモテなら、100ダメージ追加。"
		},
		cost: ["Colorless", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [760]
}

export default card
