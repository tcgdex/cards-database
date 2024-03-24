import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Crown ex",
		fr: "Chef-de-Fer-ex",
		es: "Ferrotesta ex",
		it: "Capoferreo-ex",
		pt: "Chifres Férreos ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cobalt Command",
			fr: "Ordre Cobalt",
			es: "Orden Cobalto",
			it: "Cobalcomando",
			pt: "Comando de Cobalto"
		},

		effect: {
			en: "Attacks used by your Future Pokémon, except any Iron Crown ex, do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques utilisées par vos Pokémon Temps futur, à l'exception de Chef-de-Fer-ex, infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques usados por tus Pokémon del futuro, excepto los de Ferrotesta ex, hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi usati dai tuoi Pokémon Tempo Futuro, a eccezione di qualsiasi Capoferreo-ex, infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques usados pelos seus Pokémon Futuristas, exceto por quaisquer Chifres Férreos ex, causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Twin Shotels",
			fr: "Shotel Double",
			es: "Shotel Gemelas",
			it: "Doppio Shotel",
			pt: "Espadas Gêmeas"
		},

		effect: {
			en: "This attack does 50 damage to 2 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance, or by any effects on those Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur ces Pokémon.",
			es: "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en esos Pokémon.",
			it: "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente su quei Pokémon.",
			pt: "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente. O dano deste ataque não é afetado por Fraqueza, Resistência ou por quaisquer efeitos naqueles Pokémon."
		}
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card