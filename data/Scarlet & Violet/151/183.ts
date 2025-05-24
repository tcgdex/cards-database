import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		fr: "Dracaufeu-ex",
		en: "Charizard ex",
		es: "Charizard ex",
		it: "Charizard-ex",
		pt: "Charizard ex",
		de: "Glurak-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Aile de Bravoure",
			en: "Brave Wing",
			es: "Ala Osada",
			it: "Ala Impavida",
			pt: "Asa Intrépida",
			de: "Tapfere Flügel"
		},

		effect: {
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			en: "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}, {
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			fr: "Vortex Explosif",
			en: "Explosive Vortex",
			es: "Vórtice Explosivo",
			it: "Vortice Esplosivo",
			pt: "Vórtice Explosivo",
			de: "Explosiver Wirbel"
		},

		effect: {
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			en: "Discard 3 Energy from this Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			it: "Scarta tre Energie da questo Pokémon.",
			pt: "Descarte 3 Energias deste Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 330
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Mochizuki"
}

export default card