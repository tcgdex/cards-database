import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ハーデリア",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "マントのように 体を 覆う 黒い 体毛は とても 硬い。 受けた ダメージを 減らしてくれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほえる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "つきたおし" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

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
		ja: "ヨーテリー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [507],
	thirdParty: {
		cardmarket: 829076,
		tcgplayer: 636626,
	},
};

export default card;
