import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "絶対",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [359],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				ja: "悪いニュース",
			},
			effect: {
				ja: "対戦相手の手のカードの数が少なくとも6人の場合は、対戦相手に5枚のカードが残るまで、見ずにそこに多数のカードを選択します。あなたが選んだカードを相手に捨てさせてください。",
			},
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "賞金",
			},
			effect: {
				ja: "対戦相手よりも多くの賞品が残っている場合、この攻撃は20ダメージに20ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
