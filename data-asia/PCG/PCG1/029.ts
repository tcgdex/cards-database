import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "デューゴン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [87],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "保護",
			},
			effect: {
				ja: "対戦相手のPokã©Mon-ExによってDewgongに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "コールドブレス",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "オーロラビーム",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
