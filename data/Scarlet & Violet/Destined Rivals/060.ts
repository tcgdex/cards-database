import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [460],
	set: Set,

	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		de: "Rexblisar",
		it: "Abomasnow",
		es: "Abomasnow",
		pt: "Abomasnow",
		'es-mx': "Abomasnow"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Lunge Out",
			fr: "Allonger",
			de: "Sprungangriff",
			it: "Affondo Lungo",
			es: "Arremeter",
			pt: "Bote",
			'es-mx': "Embestida Brusca"
		},

		damage: 90
	}, {
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			en: "Frozen Wood",
			fr: "Bois Glacé",
			de: "Frostiges Holz",
			it: "Legno Ghiacciato",
			es: "Madera Congelada",
			pt: "Madeira Congelada",
			'es-mx': "Madera Congelada"
		},

		effect: {
			en: "If this Pokémon has 2 or more {G} Energy attached, this attack does 120 more damage.",
			fr: "Si 2 Énergies {G} ou plus sont attachées à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 2 {G}-Energien angelegt sind, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha due o più Energie {G} assegnate, questo attacco infligge 120 danni in più.",
			es: "Si este Pokémon tiene 2 Energías {G} o más unidas, este ataque hace 120 puntos de daño más.",
			pt: "Se este Pokémon tiver 2 ou mais Energias {G} ligadas a ele, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon tiene 2 Energías {G} o más unidas, este ataque hace 120 puntos de daño más."
		},

		damage: "120+"
	}],

	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825934
	}
}

export default card
