import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "プルリル",
	},

	illustrator: "MARINA Chikazawa",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "薄い ベールのような 腕で 相手の 体を 縛りつけたまま 海の 底へ 沈んでいくのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うみのかげ" },
			damage: 20,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、相手は手札からグッズを出して使えない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

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

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [592],
	thirdParty: {
		cardmarket: 829043,
		tcgplayer: 636594,
	},
};

export default card;
