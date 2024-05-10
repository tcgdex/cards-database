import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "クエスパトラ",
		'zh-tw': "超能豔鴕"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [956],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "大きな 瞳から サイコパワーを 浴びせて 相手を 動けなくする。 見かけによらず 気性は 荒い。",
		'zh-tw': "會從大大的眼睛放出精神力量讓對手無法動彈。 有別外表，性格非常粗暴。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "がんりき",
			'zh-tw': "眼力"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card