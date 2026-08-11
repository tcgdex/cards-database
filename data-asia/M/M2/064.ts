import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "プリン",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "つぶらな 瞳が 揺れるとき 眠たくなるような 不思議で 気持ちのいい 歌を 歌う。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "たまころがり"}, "damage": "20x", "cost": ["Colorless"], "effect": {"ja": "ウラが出るまでコインを投げ、オモテの数×20ダメージ。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [39],

	thirdParty: {
		cardmarket: 850572,
		tcgplayer: 655843,
	},
};

export default card;