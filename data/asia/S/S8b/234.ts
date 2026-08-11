import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュVMAX",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "オカルトナンバー" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。この番、自分の手札から「アセロラの予感」を出して使っていたなら、のせるダメカンの数は13個になる。",
			},
		},
		{
			name: { ja: "ダイシャドー" },
			damage: 120,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587032,
				tcgplayer: 571486,
			},
		},
	],

	evolveFrom: {
		ja: "ミミッキュV",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [778],
};

export default card;
