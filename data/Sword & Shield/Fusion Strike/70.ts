import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [550],
	set: Set,

	name: {
		en: "Basculin",
		fr: "Bargantua",
		es: "Basculin",
		it: "Basculin",
		pt: "Basculin",
		de: "Barschuft"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		en: "Known for their violence, these Pokémon have the most fights with schools of red-striped Basculin."
	},

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Swarm the Wound",
			fr: "Assaut sur la Plaie",
			de: "Wundschwarm",
			es: "Agrandar la Herida",
			pt: "Aglomerar na Ferida",
			it: "Accerchiamento Spietato"
		},

		damage: "30+",

		effect: {
			en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582204
	}
}

export default card