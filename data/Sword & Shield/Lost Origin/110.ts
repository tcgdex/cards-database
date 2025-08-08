import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [870],
	set: Set,

	name: {
		en: "Falinks",
		fr: "Hexadron",
		es: "Falinks",
		it: "Falinks",
		pt: "Falinks",
		de: "Legios"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Fighting Headbutt",
			fr: "Coup d'Boule Combatif",
			es: "Cabezazo Lucha",
			it: "Bottintesta Combattente",
			pt: "Cabeçada de Luta",
			de: "Kämpferische Kopfnuss"
		},

		effect: {
			en: "This attack's damage isn't affected by Weakness. If your opponent's Active Pokémon is a Pokémon V, this attack does 50 more damage.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse. Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 50 dégâts supplémentaires.",
			es: "El daño de este ataque no se ve afectado por Debilidad. Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 50 puntos de daño más.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza. Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 50 danni in più.",
			pt: "O dano deste ataque não é afetado por Fraqueza. Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 50 pontos de dano a mais.",
			de: "Der Schaden dieser Attacke wird durch Schwäche nicht verändert. Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Jet Headbutt",
			fr: "Bélier Volant",
			es: "Turbocabezazo",
			it: "Zuccata Jet",
			pt: "Cabeçada a Jato",
			de: "Flinke Kopfnuss"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card