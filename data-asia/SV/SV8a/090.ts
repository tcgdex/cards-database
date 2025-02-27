import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "イイネイヌ",
		id: "Okidogi",
		th: "อี้เนะอินุ",
		'zh-tw': "夠讚狗",
		'zh-cn': "夠讚狗"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	dexId: [1014],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "すぐ 頭に 血が 上ってしまう 荒くれもの。 首の 鎖を 振り回し なんでも 叩き潰す。",
		id: "Pokémon yang kasar dan mudah marah. Ia memukul habis segalanya dengan mengayunkan rantai di lehernya.",
		th: "จอมอันธพาลที่มีอารมณ์รุนแรงและเลือดขึ้นหน้าได้ง่าย ทุบทำลายทุกสิ่งทุกอย่างด้วยการเหวี่ยงโซ่ที่คอ",
		'zh-tw': "動不動就會怒火沖天的 粗暴傢伙。會揮甩脖子的鎖鏈 一股腦兒地擊碎東西。",
		'zh-cn': "動不動就會怒火沖天的 粗暴傢伙。會揮甩脖子的鎖鏈 一股腦兒地擊碎東西。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アドレナパワー",
			id: "Adrenaline Power",
			th: "อะดรีนาลีนพาวเวอร์",
			'zh-tw': "腎上腺力量",
			'zh-cn': "腎上腺力量"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンの最大HPは「＋100」され、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+100」される。",
			id: "Jika Pokémon ini mengenakan Energi {Kegelapan}, HP maksimal Pokémon ini bertambah sejumlah 100 dan kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 100.",
			th: "ถ้าโปเกมอนนี้มีพลังงาน[ความมืด]ติดอยู่ HP สูงสุดของโปเกมอนนี้จะถูก [+100] แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+100]",
			'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則這隻寶可夢的最大HP「+100」，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+100」點。",
			'zh-cn': "若這隻寶可夢身上附有【惡】能量卡，則這隻寶可夢的最大HP「+100」，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+100」點。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "グッドパンチ",
			id: "Good Punch",
			th: "กู้ดพันช์",
			'zh-tw': "好拳",
			'zh-cn': "好拳"
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