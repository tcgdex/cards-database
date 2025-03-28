import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ソウブレイズ",
		id: "Ceruledge",
		th: "โซเบลดส์",
		'zh-tw': "蒼炎刃鬼",
		'zh-cn': "蒼炎刃鬼"
	},

	illustrator: "Ryota Murayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [937],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "両腕の 炎の剣は 志半ばで 力つきた 剣士の 怨念で 燃え上がる。",
		id: "Pedang api pada sepasang lengan Ceruledge membara dengan dendam kesatria yang meninggal sebelum tujuannya tercapai.",
		th: "ดาบเพลิงที่แขนทั้งสองข้างเผาไหม้ด้วยความแค้นของนักดาบที่สิ้นลมไปก่อนที่จะบรรลุเป้าหมาย",
		'zh-tw': "雙臂的火焰之劍靠著 在得志前就亡命的 劍士怨念而燃燒。",
		'zh-cn': "雙臂的火焰之劍靠著 在得志前就亡命的 劍士怨念而燃燒。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ライフサッカー",
			id: "Life Sucker",
			th: "ไลฟ์ซัคเกอร์",
			'zh-tw': "生命之紗",
			'zh-cn': "生命之紗"
		},

		damage: 50,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			id: "Pulihkan HP Pokémon ini sejumlah 30.",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			'zh-cn': "將這隻寶可夢恢復「30」HP。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "とうしのたいけん",
			id: "Pedang Besar Semangat Petarung",
			th: "ดาบยักษ์ของนักสู้",
			'zh-tw': "鬥士的巨劍",
			'zh-cn': "鬥士的巨劍"
		},

		damage: "100+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、100ダメージ追加。",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 100.",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加100點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加100點傷害。"
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

	retreat: 2,
	regulationMark: "G"
}

export default card