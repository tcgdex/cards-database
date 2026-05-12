import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャスパー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーが 漏れ出さないように 放出する 器官を 耳で ふさいでいるのだ。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "バディアタック" }, "damage": "10+", "cost": ["Psychic"], "effect": { "ja": "この番に、手札から「マチエール」を出して使っていたなら、60ダメージ追加。" } }
	],

	
	weaknesses: [{ "type": "Darkness", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [677],
	regulationMark: "I",
};

export default card;
