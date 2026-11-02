import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メタング",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "２匹の ダンバルが 磁力で くっついた。 ２つの 脳みそにより サイコパワーは ２倍に 強化。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バレットパンチ" },
			damage: "30+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 666788,
				tcgplayer: 597472,
			},
		},
	],

	evolveFrom: {
		ja: "ダンバル",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [375],
};

export default card;
