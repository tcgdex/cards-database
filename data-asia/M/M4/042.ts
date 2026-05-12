import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "頭の ツノが 七色に 輝くとき 永遠の 命を 分け与えると いわれている。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "ジオストーム" }, "damage": "30x", "cost": ["Psychic", "Psychic", "Psychic"], "effect": { "ja": "自分のポケモン全員についている「Psychic」エネルギーの数×30ダメージ。" } }
	],

	
	weaknesses: [{ "type": "Metal", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Rare",
	dexId: [716],
	regulationMark: "I",
};

export default card;
