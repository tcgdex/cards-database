import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "meowth",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "突然スワイプ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の手を見てください。彼または彼女がそこにエネルギーカードを持っている場合は、それらの1つを選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
			},
			damage: 10,
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
