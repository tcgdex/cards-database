import { Card } from '../../../interfaces'
import Set from '../Miscellaneous Promos'

const card: Card = {
	name: {
		en: "Champion's League",
		ja: "チャンピオンズリーグ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Promo",
	category: "Trainer",

	set: Set,

	cameoDexIds: [483, 484],

	effect: {
		ja: "「チャンピオンズリーグ」は、チャンピオンズリーガーのみ使うことができる。チャンピオンズリーガーは、自分の手札を、相手プレイヤーに見せながら対戦する。",
	},

	trainerType: "Stadium",
}

export default card
