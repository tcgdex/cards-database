import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒマナッツ",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "葉っぱの 裏側に たまった 朝露だけを 飲んで 暮らす。 他には なにも 食べないという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "タネばくだん" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 666783,
				tcgplayer: 597467,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [191],
};

export default card;
