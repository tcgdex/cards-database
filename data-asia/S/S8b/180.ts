import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "一擊能量"
	},

	category: "Energy",

	effect: {
		'zh-tw': "這張卡只可附於「一擊」寶可夢身上，若附於「一擊」寶可夢以外的寶可夢身上，則將其丟棄。 只要這張卡附於寶可夢身上，視為提供1個【鬥】【惡】2種屬性的能量，附有這張卡的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+20」點。"
	},

	energyType: "Special",
	regulationMark: "E"
}

export default card