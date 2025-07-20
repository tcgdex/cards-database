import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "マウィール",
	},


	category: "Pokemon",
	dexId: [303],
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "家族を呼びます",
			},
			effect: {
				ja: "デッキを検索して、基本的なポケモンを探して、ベンチに置きます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "引き離します",
			},
			effect: {
				ja: "相手が手に5枚以上のカードを持っている場合、対戦相手が4枚のカードが残っているまで、相手は多数のカードを破棄します。",
			},
			damage: 20,
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
