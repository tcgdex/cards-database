import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		fr: "Darumacho",
		en: "Darmanitan",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			fr: "Riposte Enragée",
			en: "Damage Counterpunch",
			es: "Contragolpe de Daño",
			it: "Dannopugno",
			pt: "Contragolpe de Danos",
			de: "Konterklatsche"
		},

		effect: {
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			en: "If this Pokémon has any damage counters on it, this attack does 60 more damage.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 60 danni in più.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Explosion de Chaleur",
			en: "Heat Blast",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor",
			de: "Hitzestoß"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yuya Oka",

	thirdParty: {
		cardmarket: 725115
	}
}

export default card