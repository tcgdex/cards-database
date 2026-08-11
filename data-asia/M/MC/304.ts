import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "グランブル",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "本当は 臆病で 怖がり。 襲われると 必死に 手足を 振って 敵を 追い払おうとする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 50,
			cost: ["Psychic", "Colorless"],
		},
		{
			name: { ja: "とどめをさす" },
			damage: "90+",
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863606,
			},
		},
	],

	evolveFrom: {
		ja: "ブルー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [210],
};

export default card;
