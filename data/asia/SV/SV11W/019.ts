import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "フタチマル",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "流れるような 太刀さばきで ２枚の ホタチを あつかう 技は 厳しい 修業によって 身につける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エナジーシェル" },
			damage: "30x",
			cost: ["Water"],
			effect: {
				ja: "このポケモンについているエネルギーの数×30ダメージ。",
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

	evolveFrom: {
		ja: "ミジュマル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [502],

	thirdParty: {
		cardmarket: 829021,
		tcgplayer: 636572,
	},
};

export default card;
