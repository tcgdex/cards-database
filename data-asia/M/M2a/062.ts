import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のナッシー",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "ごくまれに 頭の どれか ひとつが 地面に 落ちると タマタマになって 動きだすという。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トライキネシス" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、すべてオモテなら、相手のポケモンを1匹選び、きぜつさせる。",
			},
		},
		{
			name: { ja: "すてみタックル" },
			damage: 150,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861305,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861626,
			},
		},
		{
			type: "reverse",
			foil: "team-rocket",
			thirdParty: {
				cardmarket: 861627,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のタマタマ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [103],
};

export default card;
