import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチム",
	},

	illustrator: "Kanami Ogata",
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [574],
};

export default card;
