import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティオス（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [381],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "デルタオーラ",
			},
			effect: {
				ja: "LatiasまたはLatias Exがプレイされている場合、LatiosのPsychic Forceの攻撃コストは今や軽demetalcolorlessになりました。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ドラゴンクロー",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Metal", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "サイキックフォース",
			},
			effect: {
				ja: "対戦相手にステージ2の進化したポケモンがいない場合、この攻撃は何もしません。",
			},
			damage: 80,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
