import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ムウマージ",
		'zh-tw': "夢妖魔"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [429],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "呪文のような 鳴き声だが まれに 相手を 幸せにする 効果も 秘めているという。",
		'zh-tw': "如同咒語般的叫聲據說也蘊藏著偶而會讓 對手變得幸福的效果。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マジカルフリック",
			'zh-tw': "魔法輕彈"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ねんどうだん",
			'zh-tw': "念動彈"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card