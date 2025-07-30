import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "埋もれた化石",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [Unknown],
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "再建",
			},
			effect: {
				ja: "ターン中（攻撃の前に）手に基本的なエネルギーカードを持っている場合は、デッキを検索してOmanyteまたはKabutoカードを検索し、対戦相手に見せて、手に入れてください。次に、基本的なエネルギーカードを手からデッキに入れます。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [],

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
