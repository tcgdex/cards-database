import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ガントル",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "パワーが みなぎると オレンジ色の 結晶が 光り 輝く。 洞穴で 地下水を 探す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "うちおとす" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンの抵抗力がタイプなら、50ダメージ追加。",
			},
		},
		{
			name: { ja: "パワージェム" },
			damage: 90,
			cost: ["Fighting", "Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	evolveFrom: {
		ja: "ダンゴロ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [525],
	thirdParty: {
		cardmarket: 829046,
		tcgplayer: 636597,
	},
};

export default card;
