import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Ceruledge",
		fr: "Malvalame",
		es: "Ceruledge",
		it: "Ceruledge",
		pt: "Ceruledge"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Life Sucker",
			fr: "Aspire-Vie",
			es: "Sorbevidas",
			it: "Aspiravita",
			pt: "Sugador de Vida"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 50
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Fighting Sword",
			fr: "Épée Combattante",
			es: "Espada Combativa",
			it: "Spada Combattente",
			pt: "Espada de Combate"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 100 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 100 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 100 pontos de dano a mais."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card