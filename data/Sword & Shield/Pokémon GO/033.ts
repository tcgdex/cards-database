import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [178],
	set: Set,

	name: {
		en: "Xatu",
		fr: "Xatu",
		es: "Xatu",
		it: "Xatu",
		pt: "Xatu",
		de: "Xatu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
		es: "Natu",
		it: "Natu",
		pt: "Natu",
		de: "Natu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Pinpoint Wave",
			fr: "Onde Ciblée",
			es: "Onda Precisa",
			it: "Onda di Precisione",
			pt: "Onda Localizadora",
			de: "Präzisionswelle"
		},

		effect: {
			en: "This attack does 90 damage to 1 of your opponent's Pokémon V. This damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 90 dégâts à l'un des Pokémon-V de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			es: "Este ataque hace 90 puntos de daño a 1 de los Pokémon V de tu rival. Este daño no se ve afectado por Debilidad o Resistencia.",
			it: "Questo attacco infligge 90 danni a uno dei Pokémon-V del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
			pt: "Este ataque causa 90 pontos de dano a 1 dos Pokémon V do seu oponente. Este dano não é afetado por Fraqueza ou Resistência.",
			de: "Diese Attacke fügt 1 Pokémon-V deines Gegners 90 Schadenspunkte zu. Dieser Schaden wird durch Schwäche und Resistenz nicht verändert."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Mind Bend",
			fr: "Contrôleur d'Esprit",
			es: "Fusión Mental",
			it: "Fusione Mentale",
			pt: "Dobra Mentes",
			de: "Gedankenverbiegung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 50
	}],

	retreat: 0,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card