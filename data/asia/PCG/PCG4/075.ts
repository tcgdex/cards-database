import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒットモントップ",
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
				ja: "進化の段階",
			},
			effect: {
				ja: "Hitmontopが進化したポカモンであり、アクティブなポケモンであり、対戦相手の攻撃によって損傷を受けている限り（Hitmontopがノックアウトされたとしても）、攻撃するPokã©Monに2つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "上向きキック",
			},
			effect: {
				ja: "防御するポケモンに少なくとも2つのダメージカウンターがすでにある場合、この攻撃は20のダメージと30のダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スパイラルキック",
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
