import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルホッグ",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ぬきうちチェック"}, "cost": ["Colorless"], "effect": {"ja": "コインを3回投げる。オモテが出たなら、相手の手札を見て、その中からカードをオモテの数ぶん選び、相手の山札にもどして切る。"}}, {"name": {"ja": "けたぐり"}, "cost": ["Colorless"], "damage": 50}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ミネズミ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [505],
};

export default card;
