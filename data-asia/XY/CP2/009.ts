import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロム",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ボルテージストーム" },
			damage: 90,
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力の計算をしない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563490,
				tcgplayer: 605354,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [644],
};

export default card;
