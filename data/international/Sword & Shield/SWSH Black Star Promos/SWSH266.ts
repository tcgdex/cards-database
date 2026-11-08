import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		'fr-fr': "Deoxys V",
		'de-de': "Deoxys V",
		'es-es': "Deoxys V",
		'pt-br': "Deoxys V",
		'it-it': "Deoxys V",
		'en-us': "Deoxys V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
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
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'fr-fr': "Lame Puissante",
			'de-de': "Kraftklinge",
			'es-es': "Filo Poderoso",
			'pt-br': "Gume Poderoso",
			'it-it': "Colpotente",
			'en-us': "Power Edge"
		},

		damage: 140
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
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669842
	}
}

export default card
