import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [196],
	set: Set,

	name: {
		fr: "Mentali",
		de: "Psiana",
		es: "Espeon",
		pt: "Espeon",
		it: "Espeon",
		en: "Espeon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		pt: "Eevee",
		it: "Eevee",
		en: "Eevee"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Choc Mental",
			de: "Mentale Blockade",
			es: "Rayo Psi",
			pt: "Raio Psíquico",
			it: "Psico",
			en: "Psy Bolt"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: 20
	}, {
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
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 40 Schadenspunkte mehr zu.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			en: "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "It unleashes psychic power from the orb on its forehead. When its power is exhausted, the orb grows dull and dark."
	}
}

export default card