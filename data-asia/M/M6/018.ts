import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "カイオーガ",
	},

	illustrator: "Anderson",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "大雨と 大津波で 海を 広げた 神話の ポケモン。 グラードンと 激しく 戦った。",
	},

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
				cardmarket: 899895,
				tcgplayer: 709174,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [382],
};

export default card;
