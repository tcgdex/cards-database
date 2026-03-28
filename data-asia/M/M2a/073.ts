import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "サマヨール",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体の中で 燃えている 真っ赤な ひとつ目が サマヨールの 本体と いわれるが 誰も 見ていない。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "カースドボム"}, "effect": {"ja": "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。相手のポケモン1匹に、ダメカンを5個のせる。"}}],

	attacks: [{"name": {"ja": "おにび"}, "cost": ["Psychic", "Psychic"], "damage": 50}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヨマワル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [356],
};

export default card;
