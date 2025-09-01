import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ピンシル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [127],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "地殻",
			},
			effect: {
				ja: "対戦相手の基本的なPokã©Monからの攻撃によってPinsirに与えられた損害は、30減少します（脱力感と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "Sonicboom",
			},
			effect: {
				ja: "この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

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

export default card
