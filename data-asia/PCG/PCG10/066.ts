import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ベルダム",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [374],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Metal"],
			name: {
				ja: "磁気線",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、基本的なエネルギーカードを防御ポケモンから相手のポケモンの別のポケモンに移動します。 （相手がポケモンが1つしかない場合、この効果を無視してください。）",
			},
			damage: 10,
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
			stamp: ["1st edition"],
		},
	],
};

export default card
