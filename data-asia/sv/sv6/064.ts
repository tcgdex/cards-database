import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "イイネイヌ",
		'zh-tw': "夠讚狗"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Souichirou Gunjima",
	dexId: [1014],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "すぐ 頭に 血が 上ってしまう 荒くれもの。 首の 鎖を 振り回し なんでも 叩き潰す。",
		'zh-tw': "動不動就會怒火沖天的 粗暴傢伙。會揮甩脖子的鎖鏈 一股腦兒地擊碎東西。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アドレナパワー",
			'zh-tw': "腎上腺力量"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンの最大HPは「＋100」され、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+100」される。",
			'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則這隻寶可夢的最大HP「+100」，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+100」點。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "グッドパンチ",
			'zh-tw': "好拳"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
