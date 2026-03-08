import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "クルミル",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "タマゴから かえると ハハコモリに 服を 作ってもらい 着せられる。 フードで 頭を 隠して 寝る。",
	},

	stage: "Basic",

	attacks: [{ name: { ja: "むしくい" }, damage: 20, cost: ["Grass"] }],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [540],
	thirdParty: {
		cardmarket: 829439,
		tcgplayer: 636640,
	},
};

export default card;
