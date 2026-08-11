import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "輝くノクトウル",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [164],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Lightning", "Colorless"],
			name: {
				ja: "点滅する目",
			},
			effect: {
				ja: "3コインをフリップします。正確に1がヘッドである場合、防御ポケモンは今眠っています。正確に2がヘッドである場合、防御ポケモンは混乱しています。 3つすべてがヘッドである場合、防御ポケモンは麻痺しています。",
			},
			damage: 30,
		},
	],

	retreat: 1,

};

export default card
