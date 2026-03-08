import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "デスマス",
	},

	illustrator: "YASHIRO Nanaco",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "持っている マスクは デスマスが 人間だった ときの 顔。 たまに 見つめては 泣いている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねんじる" },
			damage: "20+",
			cost: ["Psychic", "Colorless"],
			effect: { ja: "コインを1回投げオモテなら、20ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [562],
	thirdParty: {
		cardmarket: 829476,
		tcgplayer: 636672,
	},
};

export default card;
