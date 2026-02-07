import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "チョロネコ",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "人の 物を 遊びで 盗む。 盗まれた 人も 愛くるしい 仕草に つい 許してしまうのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "わるいおさそい" },
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [509],
	thirdParty: {
		cardmarket: 829493,
		tcgplayer: 636687,
	},
};

export default card;
