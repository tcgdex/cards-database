import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "メグロコ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "年中 暖かい アローラは 過ごしやすい 環境。 砂漠 以外でも 時々 見かける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いきがるキバ" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557417,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [551],
};

export default card;
