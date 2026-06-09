import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "メロエッタex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "デビューライブ" },
			effect: {
				ja: "このポケモンは、先攻プレイヤーの最初の番でも、ワザが使える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エコーボイス" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "次の自分の番、このポケモンの「エコーボイス」のダメージは「+80」される。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [648],

	suffix: "EX",

	thirdParty: {
		cardmarket: 828499,
		tcgplayer: 636401,
	},
};

export default card;
