import { Card } from "../../../interfaces";
import Set from "../MC";

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

	attacks: [
		{
			name: { ja: "むかえにいく" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュから「ヨマワル」を3枚まで選び、ベンチに出す。",
			},
		},
		{
			name: { ja: "つぶやく" },
			damage: 30,
			cost: ["Psychic", "Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863610,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [355],
};

export default card;
