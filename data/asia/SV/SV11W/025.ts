import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "バニリッチ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "雪山に 生息する ポケモン。 大昔 氷河期の ときに 南の 土地に 移動してきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "れいとうビーム" },
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

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
		'ja-jp': "バニプッチ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [583],
	thirdParty: {
		cardmarket: 829027,
		tcgplayer: 636578,
	},
};

export default card;
