import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ナットレイ",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どっきりおとし" },
			effect: {
				ja: "相手のワザの効果やどうぐによって、このポケモンが山札からトラッシュされるとき、相手の山札の上から8枚トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スペシャルウィップ" },
			damage: "70+",
			cost: ["Metal", "Metal"],
			effect: {
				ja: "このポケモンについている特殊エネルギーがあるなら、このワザのダメージは「70」多くなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	evolveFrom: {
		ja: "テッシード",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [598],
};

export default card;
