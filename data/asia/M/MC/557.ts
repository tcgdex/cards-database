import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニスズメ",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "羽が 短く 長い 距離を 飛べない。 せわしなく 動き まわって むしポケモンを ついばむ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ついばむ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863859,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [21],
};

export default card;
