import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "モルトレス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [146],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "火災免疫",
			},
			effect: {
				ja: "手からモルトレスにファイアエネルギーカードを取り付けることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "火を集めます",
			},
			effect: {
				ja: "廃棄パイルに火災エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つをモルトレスに取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				ja: "燃えている尾",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、モルトレスに取り付けられた消防剤カードを捨ててください。",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
