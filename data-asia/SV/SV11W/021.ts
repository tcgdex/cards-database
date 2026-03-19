import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "バスラオ",
	},

	illustrator: "KEIICHIRO ITO",
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

	weaknesses: [{ type: "Lightning", value: "×2" }],

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
	dexId: [550],
	thirdParty: {
		cardmarket: 829023,
		tcgplayer: 636574,
	},
};

export default card;
