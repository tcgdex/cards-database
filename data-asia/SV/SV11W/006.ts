import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "シキジカ",
	},

	illustrator: "Narano",
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

	weaknesses: [{ type: "Fire", value: "×2" }],

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
	dexId: [585],

	thirdParty: {
		cardmarket: 828978,
		tcgplayer: 636559,
	},
};

export default card;
