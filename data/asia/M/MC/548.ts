import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルトex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ジェットヘッド" },
			damage: 70,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ファントムダイブ" },
			damage: 200,
			cost: ["Fire", "Psychic"],
			effect: {
				ja: "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863850,
			},
		},
	],

	evolveFrom: {
		ja: "ドロンチ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [887],

	suffix: "EX",
};

export default card;
