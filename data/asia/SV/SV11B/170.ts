import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メロエッタex",
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	description: {
		'ja-jp': "",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "デビューライブ" },
			effect: {
				'ja-jp': "このポケモンは、先攻プレイヤーの最初の番でも、ワザが使える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エコーボイス" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンの「エコーボイス」のダメージは「+80」される。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [648],

	suffix: "EX",

	thirdParty: {
		cardmarket: 829431,
		tcgplayer: 636524,
	},
};

export default card;
