import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨマワル",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "真っ赤な ひとつ目で 睨みつけられ 生体エネルギーを 吸われるとき ひどい 寒気に 襲われる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "むかえにいく"}, "damage": "", "cost": ["Psychic"], "effect": {"ja": "自分のトラッシュから「ヨマワル」を3枚まで選び、ベンチに出す。"}}, {"name": {"ja": "つぶやく"}, "damage": "30", "cost": ["Psychic", "Psychic"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [355],
};

export default card;
