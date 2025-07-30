import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴーレム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [76],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "岩の復ge",
			},
			effect: {
				ja: "すべてのアクティブポケモンで、20のダメージと各ダメージカウンターの10件のダメージがさらに10件のダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ロックスライド",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの2つに20ダメージを与えます（1つしかない場合は1）。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 60,
		},
	],

	retreat: 4,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};
