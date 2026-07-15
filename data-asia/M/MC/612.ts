import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "トリミアン",
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "体毛を いかに 美しく カットするか 貴族たちの 間で 競われた 時代が あった。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ファーコート" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863914,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [676],
};

export default card;
