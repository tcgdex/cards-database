import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "バスラオ",
	},

	illustrator: "Nakamura Ippan",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "赤と 青の バスラオは すぐに ケンカするほど 仲が 悪い。 とても 乱暴な ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "かみつく" }, damage: 10, cost: ["Colorless"] },
		{
			name: { ja: "むらがるキバ" },
			damage: 50,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっていないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [550],
	thirdParty: {
		cardmarket: 829461,
		tcgplayer: 636658,
	},
};

export default card;
