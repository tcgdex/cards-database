import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギルガルド",
		'zh-tw': "堅盾劍怪"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [681],
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "強力な 霊力で 人や ポケモンを 操り ギルガルドに 都合の 良い 国を つくらせた。",
		'zh-tw': "堅盾劍怪曾經用強大的靈力控制人和寶可夢，建立了 適合自己生活的國家。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しんぴのたて",
			'zh-tw': "神秘之盾"
		},

		effect: {
			ja: "このポケモンは、相手の「ポケモンex・V」からワザのダメージを受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【ex】・【V】」招式的傷害。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "ハードバッシュ",
			'zh-tw': "堅硬猛擊"
		},

		damage: 120,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card