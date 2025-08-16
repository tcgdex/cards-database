import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		fr: "Deoxys V",
		de: "Deoxys V",
		es: "Deoxys V",
		pt: "Deoxys V",
		it: "Deoxys V",
		en: "Deoxys V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Psyko",
			de: "Psychokinese",
			es: "Psíquico",
			pt: "Psíquico",
			it: "Psichico",
			en: "Psychic"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			fr: "Lame Puissante",
			de: "Kraftklinge",
			es: "Filo Poderoso",
			pt: "Gume Poderoso",
			it: "Colpotente",
			en: "Power Edge"
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669842
	}
}

export default card