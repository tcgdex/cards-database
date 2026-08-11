import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'de-de': "Dragonir",
		'pt-br': "Dragonair",
		'ko-kr': "신뇽"
	},

	illustrator: "kirisAki",
	category: "Pokemon",

	dexId: [148],
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Dratini"
	},

	attacks: [{
		cost: ["Water", "Lightning", "Colorless"],

		name: {
			'en-us': "Tail Smack",
			'fr-fr': "Coup de Queue",
			'es-es': "Bofetón Cola",
			'it-it': "Codasberla",
			'de-de': "Schweifschlag",
			'pt-br': "Ataque de Cauda",
			'ko-kr': "꼬리로때리기"
		},

		damage: "80"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
		'fr-fr': "On dit que lorsque tout son corps émet une aura,\nles conditions climatiques se mettent à changer à vue d'œil.",
		'es-es': "Dicen que, cuando su cuerpo desprende un aura,\nel tiempo empieza a cambiar inmediatamente.",
		'it-it': "Dicono che quando il suo corpo emana\nun'aura, il tempo cambierà immediatamente.",
		'de-de': "Man sagt, wenn sein ganzer Körper eine\nAura ausstrahle, ändere sich augenblicklich\ndas Wetter in seiner Umgebung.",
		'pt-br': "Dizem que, se o seu corpo inteiro emitir uma aura,\no clima começará a mudar instantaneamente.",
		'ko-kr': "전신에서 오라를 발산하면\n주변 날씨가 순식간에\n변한다고 한다."
	},

	boosters: ["mewtwo"]
}

export default card
