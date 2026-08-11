import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ピクシー",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "耳が 良くて １キロ 離れた ところで 落とした 針の音を 見事に 聞き分けられる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ゆびをふる" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。",
			},
		},
		{
			name: { ja: "マジカルショット" },
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863587,
			},
		},
	],

	evolveFrom: {
		ja: "ピッピ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [36],
};

export default card;
