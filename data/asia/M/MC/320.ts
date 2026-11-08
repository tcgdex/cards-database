import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デスマス",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "持っている マスクは デスマスが 人間だった ときの 顔。 たまに 見つめては 泣いている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねんじる" },
			damage: "20+",
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863622,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [562],
};

export default card;
