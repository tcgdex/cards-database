import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メガフラエッテex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "やさしいひかり" }, "damage": "", "cost": ["Psychic"], "effect": { "ja": "おたがいのポケモン全員のHPを、それぞれ「30」回復する。" } },
		{ "name": { "ja": "エタニティブルーム" }, "damage": "200", "cost": ["Psychic", "Psychic", "Psychic"], "effect": { "ja": "自分の山札から「基本「Psychic」エネルギー」を4枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。" } }
	],

	
	weaknesses: [{ "type": "Metal", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	rarity: "Double rare",
	regulationMark: "I",
};

export default card;
