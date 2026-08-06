import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ルギアV",
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
				ja: "自分の手札を1枚トラッシュする。その後、自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "エアロダイブ" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、場に出ているスタジアムをトラッシュする。",
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
