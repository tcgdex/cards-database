import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "カイオーガ",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たきのぼり" },
			damage: 40,
			cost: ["Water", "Colorless"],
		},
		{
			name: { ja: "あらぶるうず" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "名前に「伝説」とつくスタジアムが場に出ているなら、相手のベンチポケモン全員にも、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900105,
				tcgplayer: 709233,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [382],
};

export default card;
