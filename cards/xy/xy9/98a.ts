import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
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

	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: xy9
}
export default card
