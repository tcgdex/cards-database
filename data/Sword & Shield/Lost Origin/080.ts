import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		pt: "Mimikyu",
		de: "Mimigma"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Perplex",
			fr: "Affolement",
			es: "Desconcierto",
			it: "Sconcerto",
			pt: "Perplexo",
			de: "Perplex"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Worst Gift",
			fr: "Pire Cadeau",
			es: "Regalo Pésimo",
			it: "Dono Peggiore",
			pt: "Pior Presente",
			de: "Schlimmstes Geschenk"
		},

		effect: {
			en: "This attack does 10 damage for each damage counter on all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 10 puntos de daño por cada contador de daño en todos los Pokémon de tu rival.",
			it: "Questo attacco infligge 10 danni per ogni segnalino danno presente sui Pokémon del tuo avversario.",
			pt: "Este ataque causa 10 pontos de dano para cada contador de dano em todos os Pokémon do seu oponente.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen Pokémon deines Gegners 10 Schadenspunkte zu."
		},

		damage: "10×"
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