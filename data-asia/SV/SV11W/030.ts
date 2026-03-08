import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "バチュル",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		ja: "街中で 暮らす バチュルは 民家の コンセントから 電気を 吸い取る 術を 覚えている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふいをつく" },
			damage: 30,
			cost: ["Lightning"],
			effect: { ja: "コインを1回投げウラなら、このワザは失敗。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

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
	dexId: [595],
	thirdParty: {
		cardmarket: 829032,
		tcgplayer: 636583,
	},
};

export default card;
