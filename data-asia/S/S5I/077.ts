import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "バンギラスV",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やまなだれ" },
			damage: 60,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から2枚トラッシュする。",
			},
		},
		{
			name: { ja: "いちげきクラッシュ" },
			damage: 240,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を上から4枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538588,
				tcgplayer: 569026,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [248],
};

export default card;
