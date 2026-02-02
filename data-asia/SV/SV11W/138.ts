import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤブクロン",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "不衛生な 場所を 好む。 ゲップのように 吐き出す ガスを 吸い込むと １週間 寝込む。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "よだれ" }, damage: 10, cost: ["Darkness"] },
		{
			name: { ja: "ヘドロばくだん" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [568],
	thirdParty: {
		cardmarket: 829497,
		tcgplayer: 636691,
	},
};

export default card;
