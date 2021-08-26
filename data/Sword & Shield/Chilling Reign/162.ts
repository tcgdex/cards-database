import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Volcanion V",
		en: "Volcanion V",
		es: "Volcanion V",
		it: "Volcanion V",
		pt: "Volcanion V",
		de: "Volcanion V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Explosion de Chaleur",
			en: "Heat Blast",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor",
			de: "Hitzestoß"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			fr: "Plaquage Explosif",
			en: "Dynamite Tackle",
			es: "Placaje Dinamita",
			it: "Azione Esplosiva",
			pt: "Investida Dinamite",
			de: "Dynamit-Tackle"
		},

		effect: {
			fr: "Si ce Pokémon a au moins 10 marqueurs de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
			en: "If this Pokémon has 10 or more damage counters on it, this attack does 150 more damage.",
			es: "Si este Pokémon tiene 10 contadores de daño o más sobre él, este ataque hace 150 puntos de daño más.",
			it: "Se questo Pokémon ha 10 o più segnalini danno, questo attacco infligge 150 danni in più.",
			pt: "Se este Pokémon tiver 10 ou mais contadores de dano nele, este ataque causará 150 pontos de dano a mais.",
			de: "Wenn auf diesem Pokémon 10 oder mehr Schadensmarken liegen, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card