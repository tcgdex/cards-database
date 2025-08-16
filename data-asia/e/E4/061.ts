import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティテート",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [20],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "傷",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "連続した噛みつき",
			},
			effect: {
				ja: "3コインをフリップします。 1ヘッドを獲得した場合、この攻撃は10ダメージに加えて10ダメージを与えます。 2つのヘッドを獲得した場合、この攻撃は10ダメージに加えて30ダメージを与えます。 3ヘッドを獲得した場合、この攻撃は10ダメージに加えて60ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
