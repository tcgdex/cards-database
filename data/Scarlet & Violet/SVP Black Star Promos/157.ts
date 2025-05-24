import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos",
		fr: "Électhor",
		es: "Zapdos",
		it: "Zapdos",
		pt: "Zapdos",
		de: "Zapdos"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Follow-Up Bolt",
			fr: "Éclair de Relance",
			es: "Seguimiento Rayo",
			it: "Proseguimento Fulmine",
			pt: "Raio em Sequência",
			de: "Anschluss-Blitz"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Drill Peck",
			fr: "Bec Vrille",
			es: "Pico Taladro",
			it: "Perforbecco",
			pt: "Bico Broca",
			de: "Bohrschnabel"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Nisota Niso"
}

export default card