import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "バオップ",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "頭の ふさは 怒ると 温度が 上がり ３００度 以上になる。 木の実を ふさで 焼いて 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札を1枚引く。" },
		},
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [513],
	thirdParty: {
		cardmarket: 829454,
		tcgplayer: 636652,
	},
};

export default card;
