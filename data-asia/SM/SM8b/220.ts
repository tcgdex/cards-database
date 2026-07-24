import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "エーフィGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サイケこうせん" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "60+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x30ダメージ追加。",
			},
		},
		{
			name: { ja: "ディビジョンGX" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "ダメカン10個を、相手のポケモンに好きなようにのせる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551596,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [196],

	suffix: "GX",
};

export default card;
