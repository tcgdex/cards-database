import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ゴチム",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "リボンのような 触角で サイコパワーを 増幅させる。 なにかを じっと 見つめている。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "ちょうねんりき" }, damage: 20, cost: ["Psychic"] },
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

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

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [574],
	thirdParty: {
		cardmarket: 829040,
		tcgplayer: 636591,
	},
};

export default card;
