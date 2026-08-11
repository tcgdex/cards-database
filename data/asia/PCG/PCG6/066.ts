import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アズリル",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [298],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "赤ちゃんの進化",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、マリルを手から置くことができます（これは進化するアズリルとしてカウントされます）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "タイプマッチ",
			},
			effect: {
				'ja-jp': "あなたの手に基本的なエネルギーカードを選択し、それを相手に見せてください。次に、そのエネルギータイプの基本的なポケモンまたはエボリューションカードを検索し、相手に見せて、手に入れます。その後、デッキをシャッフルします。",
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
