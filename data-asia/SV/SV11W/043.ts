import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ダンゴロ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "６角形の 耳を 持つ。 地底で 圧縮された 体は 鉄に 負けないくらい 硬い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かたくなる" },
			cost: ["Fighting"],
			effect: {
				ja: "次の相手の番、このポケモンは「40」以下のワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "いわころがり" },
			damage: 30,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

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
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [524],
	thirdParty: {
		cardmarket: 829045,
		tcgplayer: 636596,
	},
};

export default card;
