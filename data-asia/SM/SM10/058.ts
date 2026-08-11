import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "メグロコ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "年中 暖かい アローラは 過ごしやすい 環境。 砂漠 以外でも 時々 見かける。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いかくのキバ" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは、すべて「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557416,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [551],
};

export default card;
