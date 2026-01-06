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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [540],

	thirdParty: {
		cardmarket: 828971,
		tcgplayer: 636554,
	},

	// @TODO: Add Pokeball/Masterball variants
};

export default card;
