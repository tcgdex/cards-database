import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Snorlax",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [143],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "休んでください",
			},
			effect: {
				ja: "Snorlaxがターンの間に眠っている場合は、Snorlaxから2つのダメージカウンターを削除します（1つしかない場合は1を削除します）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "崩壊",
			},
			effect: {
				ja: "Snorlaxは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "投げてターンします",
			},
			effect: {
				ja: "Snorlaxが眠っている場合、この攻撃は30ダメージに加えて30ダメージを与えます。 （Snorlaxが眠っていても、この攻撃は使用できます。）",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
