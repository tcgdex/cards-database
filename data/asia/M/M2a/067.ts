import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムウマ",
	},

	illustrator: "Kazuhisa Uragami",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "いきなり 後ろ髪に 噛みつき 引っぱっては 人の 驚く 姿を見て 喜んでいる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かくせい" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861310,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861634,
			},
		},
		{
			type: "reverse",
			foil: "duskball",
			thirdParty: {
				cardmarket: 861635,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [200],
};

export default card;
