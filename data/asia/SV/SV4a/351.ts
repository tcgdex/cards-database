import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ネモ",
		'zh-tw': "妮莫",
		'id-id': "Nemola"
	},

	illustrator: "aspara",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
		'zh-tw': "從自己的牌庫抽出3張卡。",
		'id-id': "Ambil 3 kartu dari atas Deck sendiri."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747705,
				tcgplayer: 577566,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card