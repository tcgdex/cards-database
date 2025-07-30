import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "wigglytuff ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [40],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "眠そうな歌",
			},
			effect: {
				ja: "防御するポケモンはそれぞれ眠っています。",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "波をします",
			},
			effect: {
				ja: "ベンチ付きポケモンごとに30のダメージに加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
