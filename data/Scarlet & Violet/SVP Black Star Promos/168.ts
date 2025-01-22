import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon",
		fr: "Aquali",
		es: "Vaporeon",
		pt: "Vaporeon",
		it: "Vaporeon",
		de: "Aquana"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
			es: "Drenaje Espiral",
			pt: "Dreno Espiral",
			it: "Assorbimento Spirale",
			de: "Spiralsauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Fighting Whirlpool",
			fr: "Tourbillon Combatif",
			es: "Remolino Luchador",
			pt: "Luta Redemoinho",
			it: "Mulinello Combattente",
			de: "Strudelfäuste"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card