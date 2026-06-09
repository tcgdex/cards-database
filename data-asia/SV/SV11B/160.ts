import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "キュレムex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ブリザードバースト" },
			damage: 130,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ、相手がすでにとったサイドの枚数×10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [646],

	suffix: "EX",

	thirdParty: {
		cardmarket: 829419,
		tcgplayer: 636514,
	},
};

export default card;
