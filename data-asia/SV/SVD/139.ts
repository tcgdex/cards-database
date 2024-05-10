import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "反轉能量"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則只要這張卡附於進化寶可夢（「擁有規則的寶可夢」除外）身上，視為提供3個所有屬性的能量。"
	},

	energyType: "Special",
	regulationMark: "G"
}

export default card