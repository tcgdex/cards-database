import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Galarian Rapidash V",
		'pt-br': "Rapidash de Galar V",
		'fr-fr': "Galopa de Galar V",
		'de-de': "Galar-Gallopa V",
		'es-es': "Rapidash de Galar V",
		'it-it': "Rapidash di Galar V"
	},

	rarity: "Promo",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Libra Horn",
			'pt-br': "Chifre de Libra",
			'fr-fr': "Corne Balance",
			'de-de': "Waagehorn",
			'es-es': "Cuerno Libra",
			'it-it': "Bilanciacorno"
		},

		effect: {
			'en-us': "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 100.",
			'pt-br': "Coloque contadores de dano em 1 dos Pokémon do seu oponente até o PS restante dele ser 100.",
			'fr-fr': "Placez des marqueurs de dégâts sur l'un des Pokémon de votre adversaire jusqu'à ce qu'il ne lui reste que 100 PV.",
			'de-de': "Lege so lange Schadensmarken auf 1 Pokémon deines Gegners, bis seine verbleibenden KP gleich 100 sind.",
			'es-es': "Pon contadores de daño en 1 de los Pokémon de tu rival hasta que le queden 100 PS.",
			'it-it': "Metti dei segnalini danno su uno dei Pokémon del tuo avversario finché i suoi PS rimanenti diventano 100."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Psychic",
			'pt-br': "Psíquico",
			'fr-fr': "Psyko",
			'de-de': "Psychokinese",
			'es-es': "Psíquico",
			'it-it': "Psichico"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario."
		},

		damage: "60+",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [78],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 561771
	}
}

export default card
