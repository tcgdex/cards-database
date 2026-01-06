import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "エンブオー",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	description: {
		ja: "アゴの 炎で こぶしを 燃やして 炎の パンチを 繰り出す。 とても 仲間思いの ポケモン。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "れっからんぶ" },
			effect: {
				ja: "自分の番に何回でも使える。自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒートスタンプ" },
			damage: 120,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "×2" }],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "チャオブー",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [500],

	thirdParty: {
		cardmarket: 829015,
		tcgplayer: 636566,
	},

	// @TODO: Add Pokeball/Masterball variants
};

export default card;
