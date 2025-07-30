import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Dugtrio",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [51],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "Sonicboom",
			},
			effect: {
				ja: "この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "ランブル",
			},
			effect: {
				ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
