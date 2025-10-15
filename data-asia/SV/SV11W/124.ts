import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "プルリル",
	},

	illustrator: "Shinya Komatsu",
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [592],
};

export default card;
