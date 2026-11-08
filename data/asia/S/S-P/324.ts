import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルギアV",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かぜよみ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の手札を1枚トラッシュする。その後、自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "エアロダイブ" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、場に出ているスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 675887,
				tcgplayer: 597497,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [249],
};

export default card;
