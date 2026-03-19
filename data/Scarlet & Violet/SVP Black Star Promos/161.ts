import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		en: "Charizard ex",
		fr: "Dracaufeu-ex",
		es: "Charizard ex",
		it: "Charizard-ex",
		pt: "Charizard ex",
		de: "Glurak-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Brave Wing",
			fr: "Aile de Bravoure",
			es: "Ala Osada",
			it: "Ala Impavida",
			pt: "Asa Intrépida",
			de: "Tapfere Flügel"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}, {
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			en: "Explosive Vortex",
			fr: "Vortex Explosif",
			es: "Vórtice Explosivo",
			it: "Vortice Esplosivo",
			pt: "Vórtice Explosivo",
			de: "Explosiver Wirbel"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			it: "Scarta tre Energie da questo Pokémon.",
			pt: "Descarte 3 Energias deste Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 330
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "PLANETA Mochizuki"
}

export default card