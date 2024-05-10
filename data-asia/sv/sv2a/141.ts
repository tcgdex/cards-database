import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カブトプス",
		'zh-tw': "鐮刀盔"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "絶滅の 理由は 不明。 暖かい 海に 暮らしていた 凶暴な 古代のポケモン。",
		'zh-tw': "沒有人知道牠為何會滅絕。過去曾棲息在溫暖的海域， 是性情凶暴的古代寶可夢。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "たいこのことわり",
			'zh-tw': "遠古真理"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のバトルポケモンの弱点は「×4」としてダメージ計算をする。",
			'zh-tw': "只要這隻寶可夢在場上，對手的戰鬥寶可夢的弱點以「×4」計算傷害。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ドレインスラッシュ",
			'zh-tw': "吸取揮砍"
		},

		damage: 100,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card