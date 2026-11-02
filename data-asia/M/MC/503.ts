import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードラン",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "火山の 洞穴に 生息。 十字の ツメを 食いこませて 壁や 天井を はい回る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たたきつぶす" },
			damage: 40,
			cost: ["Metal", "Colorless"],
		},
		{
			name: { ja: "アイアンバスター" },
			damage: 130,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863805,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [485],
};

export default card;
