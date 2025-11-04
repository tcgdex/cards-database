import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "シキジカ",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "体毛が 野山の 草と 同じ 色と 香りに 変わる。 敵意を 感じると 草むらに 隠れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うしろげり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [585],
};

export default card;
