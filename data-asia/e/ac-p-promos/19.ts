import { Card } from '../../../interfaces'
import Set from '../ac-p-promos'

const card: Card = {
	name: {
		en: "Pokémon Center Tokyo",
		ja: "ポケモンセンター トウキョー",
	},
	illustrator: "Atsuko Ujiie",
	rarity: "Promo",
	category: "Trainer",

	set: Set,

	cameoDexIds: [25],

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、のぞむなら、自分のトラッシュから「たねポケモン」または「ベイビィポケモン」を1枚選び出してよい。選び出したプレイヤーは、そのカードを、自分のベンチに出す。（ベンチに空きがないプレイヤーは、何もしない。）",
	},
}

export default card
