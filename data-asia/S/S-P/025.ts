import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ポニータ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "小さな ツノに 癒しの 力を 秘めている。 ちょっとした 傷なら ツノを すり寄せ 治して くれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いやしのはどう" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のポケモンを1匹選び、HPを「30」回復する。",
			},
		},
		{
			name: { ja: "はねまわる" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463024,
				tcgplayer: 597245,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [77],
};

export default card;
