import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "クローダント",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [342],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "パワーピンチャー",
			},
			effect: {
				ja: "Crawdauntがあなたのアクティブなポカモンである限り、あなたのアクティブなポカモンのいずれかが防御ポケモンにダメージを与えるとき、攻撃は10件のダメージを与えます（脱力感と抵抗を適用する前に）。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "ギロチン",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};
