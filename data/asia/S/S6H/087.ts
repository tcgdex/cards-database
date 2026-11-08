import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トルネロスVMAX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "ブラストウインド" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ダイフウジン" },
			damage: "120+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "場にスタジアムが出ているなら、120ダメージ追加。その後、そのスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560963,
				tcgplayer: 569219,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "トルネロスV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [641],
};

export default card;
