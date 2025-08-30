import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "NINCADA",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [290],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "リーチライフ",
			},
			effect: {
				ja: "攻撃後、NINCADAからディフェンディングポケモンに与えた損害に等しい損害カウンターの数を取り除きます。 NINCADAのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
