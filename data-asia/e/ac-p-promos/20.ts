import { Card } from '../../../interfaces'
import Set from '../ac-p-promos'

const card: Card = {
	name: {
		en: "Pokémon Center Osaka",
		ja: "ポケモンセンター オーサカ",
	},
	illustrator: "K. Hoshiba",
	rarity: "Promo",
	category: "Trainer",

	set: Set,

	cameoDexIds: [52],

	effect: {
		ja: "自分のベンチポケモンを2匹選び、それぞれに対して、コインを1回ずつ投げる。その後、「おもて」が出たポケモンにのっているダメージカウンターを、それぞれ2個ずつとりのぞく。",
	},
}

export default card
