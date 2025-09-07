import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "マリル",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [183],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "マイナーな用事が走る",
			},
			effect: {
				ja: "デッキを最大2つの基本エネルギーカードで検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
