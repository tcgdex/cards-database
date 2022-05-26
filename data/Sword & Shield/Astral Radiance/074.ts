import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Sudowoodo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Vamoose",
			fr: "Sauve-qui-Peut",
			es: "Largarse",
			it: "Taglia la Corda",
			pt: "Vambora",
			de: "Verduften"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, it has no Retreat Cost.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, il n'a pas de Coût de Retraite.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, no tiene ningún Coste de Retirada.",
			it: "Se questo Pokémon ha dei segnalini danno, non ha costo di ritirata.",
			pt: "Se este Pokémon tiver algum contador de dano nele, não terá custo de Recuo.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Double-Edge",
			fr: "Damoclès",
			es: "Doble Filo",
			it: "Sdoppiatore",
			pt: "Faca de Dois Gumes",
			de: "Risikotackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card