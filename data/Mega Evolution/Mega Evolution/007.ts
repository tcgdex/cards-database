import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		de: "Tangoloss",
		it: "Tangrowth",
		es: "Tangrowth",
		pt: "Tangrowth",
		'es-mx': "Tangrowth"
	},

	illustrator: "REND",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [465],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Absorb",
			fr: "Vole-Vie",
			de: "Absorber",
			it: "Assorbimento",
			es: "Absorber",
			pt: "Absorção",
			'es-mx': "Absorción"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "Pumped-Up Whip",
			fr: "Fouet Gonflé à Bloc",
			de: "Aufgeladene Peitsche",
			it: "Frustata Rinforzata",
			es: "Latigazo Vigorizado",
			pt: "Chicotada Bombada",
			'es-mx': "Latigazo Fortachón"
		},

		effect: {
			en: "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 140 more damage.",
			fr: "Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 140 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 140 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha almeno due Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 140 danni in più.",
			es: "Si este Pokémon tiene por lo menos 2 Energías adicionales unidas (además de las del coste de este ataque), este ataque hace 140 puntos de daño más.",
			pt: "Se este Pokémon tiver pelo menos 2 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque causará 140 pontos de dano a mais.",
			'es-mx': "Si este Pokémon tiene al menos 2 Energías adicionales unidas (además de las del costo de este ataque), este ataque hace 140 puntos de daño más."
		},

		damage: "120+"
	}],

	retreat: 4,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654346,
		cardmarket: 851078
	}
}

export default card