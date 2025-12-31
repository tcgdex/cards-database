import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		it: "Dragonair",
		de: "Dragonir",
		'pt-br': "Dragonair",
		ko: "신뇽"
	},

	illustrator: "kirisAki",
	category: "Pokemon",

	dexId: [148],
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
		es: "Dratini",
		it: "Dratini",
		pt: "Dratini",
		de: "Dratini"
	},

	attacks: [{
		cost: ["Water", "Lightning", "Colorless"],

		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
			es: "Bofetón Cola",
			it: "Codasberla",
			de: "Schweifschlag",
			'pt-br': "Ataque de Cauda",
			ko: "꼬리로때리기"
		},

		damage: "80"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
		fr: "On dit que lorsque tout son corps émet une aura,\nles conditions climatiques se mettent à changer à vue d'œil.",
		es: "Dicen que, cuando su cuerpo desprende un aura,\nel tiempo empieza a cambiar inmediatamente.",
		it: "Dicono che quando il suo corpo emana\nun'aura, il tempo cambierà immediatamente.",
		de: "Man sagt, wenn sein ganzer Körper eine\nAura ausstrahle, ändere sich augenblicklich\ndas Wetter in seiner Umgebung.",
		'pt-br': "Dizem que, se o seu corpo inteiro emitir uma aura,\no clima começará a mudar instantaneamente.",
		ko: "전신에서 오라를 발산하면\n주변 날씨가 순식간에\n변한다고 한다."
	},

	boosters: ["mewtwo"]
}

export default card
