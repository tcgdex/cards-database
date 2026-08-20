import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス",
	},

	illustrator: "UKUMO uiti",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "お尻からだけでなく 口からも 糸を 出すので 見ただけでは どっちが 頭か わからない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "げきつうどく" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は4個になる。",
			},
		},
		{
			name: { ja: "おんみつばり" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899948,
				tcgplayer: 709198,
			},
		},
	],

	evolveFrom: {
		ja: "イトマル",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [168],
};

export default card;
