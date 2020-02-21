import Card from "../../../interfaces/Card";
import Tag from "../../../interfaces/Tag";
import Category from "../../../interfaces/Category";
import Rarity from "../../../interfaces/Rarity";
import xy9 from "../../../sets/xy/xy9"
const card: Card = {
	id: "xy9-98a",
	localId: "98a",

	name: {
		en: "Delinquent",
	},

	tags: [
		Tag.SUPPORTER
	],

	effect: {
		en: "Discard any Stadium card in play. If you do, your opponent discards 3 cards from his or her hand."
	},

	illustrator: "Megumi Mizutani",

	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: xy9
}
