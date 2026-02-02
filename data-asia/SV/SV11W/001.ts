import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "クルミル",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "タマゴから かえると ハハコモリに 服を 作ってもらい 着せられる。 フードで 頭を 隠して 寝る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むしくい",
			},
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [540],

	thirdParty: {
		cardmarket: 828971,
		tcgplayer: 636554,
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],
};

export default card;
