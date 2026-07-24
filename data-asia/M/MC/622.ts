import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのココガラ",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "メスは オスより 神経質。 羽を 汚されると 烈火のごとく 怒り くちばしで つつきまくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こわいしせん" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
			},
		},
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863924,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [821],
};

export default card;
