import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒットモントップ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [237],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "進化の段階",
			},
			effect: {
				'ja-jp': "Hitmontopが進化したポカモンであり、アクティブなポケモンであり、対戦相手の攻撃によって損傷を受けている限り（Hitmontopがノックアウトされたとしても）、攻撃するPokã©Monに2つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "上向きキック",
			},
			effect: {
				'ja-jp': "防御するポケモンに少なくとも2つのダメージカウンターがすでにある場合、この攻撃は20のダメージと30のダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スパイラルキック",
			},
			damage: 50,
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

export default card
