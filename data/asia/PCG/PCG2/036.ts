import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "natu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [177],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ミラーコート",
			},
			effect: {
				'ja-jp': "NATUが敵の攻撃によって燃やされたり、毒されたりした場合（NATUがノックアウトされたとしても）、攻撃するポケモンは、同じ特別な条件の影響を受けます（1つしかない場合は1）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "かみそりの風",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 20,
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
