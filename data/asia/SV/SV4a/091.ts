import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ソウブレイズ",
		'zh-tw': "蒼炎刃鬼",
		'th-th': "โซเบลดส์",
		'id-id': "Ceruledge"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	dexId: [937],
	hp: 140,
	types: ["Psychic"],

	description: {
		'ja-jp': "両腕の 炎の剣は 志半ばで 力つきた 剣士の 怨念で 燃え上がる。",
		'zh-tw': "雙臂的火焰之劍靠著在得志前就亡命的 劍士怨念而燃燒。",
		'th-th': "ดาบเพลิงที่แขนทั้งสองข้างเผาไหม้ด้วยความแค้นของนักดาบที่สิ้นลมไปก่อนที่จะบรรลุเป้าหมาย",
		'id-id': "Pedang api pada sepasang lengan Ceruledge membara dengan dendam kesatria yang meninggal sebelum tujuannya tercapai."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ライフサッカー",
			'zh-tw': "生命之紗",
			'th-th': "ไลฟ์ซัคเกอร์",
			'id-id': "Life Sucker"
		},

		damage: 50,

		effect: {
			'ja-jp': "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 30."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "とうしのたいけん",
			'zh-tw': "鬥士的巨劍",
			'th-th': "ดาบยักษ์ของนักสู้",
			'id-id': "Pedang Besar Semangat Petarung"
		},

		damage: "100+",

		effect: {
			'ja-jp': "相手のバトルポケモンが「ポケモンex・V」なら、100ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加100點傷害。",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 100."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746473,
				tcgplayer: 567492,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card