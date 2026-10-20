import { Card } from '../../../interfaces'
import Set from '../Miscellaneous Promos'

const card: Card = {
	name: {
		en: "Tropical Present",
		ja: "トロピカルプレゼント",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Promo",
	category: "Trainer",

	set: Set,

	cameoDexIds: [25, 143, 179, 187],

	effect: {
		en: "This special card has been sent to players to obtain 10 GET Points. (Points are added automatically)",
		ja: "このスペシャルカードが送られたプレイヤーは、特別に「ゲットGETポイント」を「10」得ることができる。(ポイントは自動的に追加される。)",
	},

	variants: [
		{
			type: "normal",
			size: "jumbo",
		},
	],
}

export default card
