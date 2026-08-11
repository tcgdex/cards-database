import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "リオル",
		'zh-tw': "利歐路",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "一晩中 走っていられる スタミナを もつ。 活発で 散歩の 相手は たいへん。",
		'zh-tw': "精力充沛，可以奔跑一整夜。由於牠十分活潑，帶牠散步的人非常辛苦。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "けたぐり",
				'zh-tw': "踢倒",
			},
			damage: 50,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687763,
				tcgplayer: 571739,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [447],
};

export default card;
