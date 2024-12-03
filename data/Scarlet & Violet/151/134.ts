import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [134],
	set: Set,

	name: {
		fr: "Aquali",
		en: "Vaporeon",
		es: "Vaporeon",
		it: "Vaporeon",
		pt: "Vaporeon",
		de: "Aquana"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Spirale Épuisante",
			en: "Spiral Drain",
			es: "Drenaje Espiral",
			it: "Assorbimento Spirale",
			pt: "Dreno Espiral",
			de: "Spiralsauger"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			en: "Heal 30 damage from this Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Tourbillon Combatif",
			en: "Fighting Whirlpool",
			es: "Remolino Luchador",
			it: "Mulinello Combattente",
			pt: "Luta Redemoinho",
			de: "Strudelfäuste"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	}
}

export default card
