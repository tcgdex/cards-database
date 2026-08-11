import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "nidoqueen",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [31],
	hp: 110,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "進化ヘルパー",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、Nidoqueenがベンチにいる場合は、アクティブなPokmonから進化するカードをデッキで検索し、アクティブなPokmonに取り付けることができます。 （これはポクモンの進化としてカウントされます。）その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "二重爪",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は30のダメージとヘッドごとに20のダメージを与えます",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st Edition"],
		},
	],
};

export default card
