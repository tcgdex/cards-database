import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダンズパース",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [206],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デッドロック",
			},
			effect: {
				'ja-jp': "DunsparceがあなたのアクティブなPokã©Monである限り、あなたの相手のDunspheceは攻撃できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ダウンドロー",
			},
			effect: {
				'ja-jp': "デッキの底から2枚のカードを描きます。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "トリッピングターン",
			},
			effect: {
				'ja-jp': "防御ポケモンは今混乱しています。 Dunspemonをベンチしたポケモンと一緒に切り替えることができます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
