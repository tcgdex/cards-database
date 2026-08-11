import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [196],
	set: Set,

	name: {
		'fr-fr': "Mentali",
		'de-de': "Psiana",
		'es-es': "Espeon",
		'pt-br': "Espeon",
		'it-it': "Espeon",
		'en-us': "Espeon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'en-us': "Eevee"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Choc Mental",
			'de-de': "Mentale Blockade",
			'es-es': "Rayo Psi",
			'pt-br': "Raio Psíquico",
			'it-it': "Psico",
			'en-us': "Psy Bolt"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Psyko",
			'de-de': "Psychokinese",
			'es-es': "Psíquico",
			'pt-br': "Psíquico",
			'it-it': "Psichico",
			'en-us': "Psychic"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 40 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'en-us': "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "It unleashes psychic power from the orb on its forehead. When its power is exhausted, the orb grows dull and dark."
	},

	thirdParty: {
		cardmarket: 583201
	}
}

export default card
