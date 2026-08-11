import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		'fr-fr': "Galopa de Galar V",
		'en-us': "Galarian Rapidash V",
		'es-es': "Rapidash de Galar V",
		'it-it': "Rapidash di Galar V",
		'pt-br': "Rapidash de Galar V",
		'de-de': "Galar-Gallopa V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			'fr-fr': "Corne Balance",
			'en-us': "Libra Horn",
			'es-es': "Cuerno Libra",
			'it-it': "Bilanciacorno",
			'pt-br': "Chifre de Libra",
			'de-de': "Waagehorn"
		},

		effect: {
			'fr-fr': "Placez des marqueurs de dégâts sur l'un des Pokémon de votre adversaire jusqu'à ce qu'il ne lui reste que 100 PV.",
			'en-us': "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 100.",
			'es-es': "Pon contadores de daño en 1 de los Pokémon de tu rival hasta que le queden 100 PS.",
			'it-it': "Metti dei segnalini danno su uno dei Pokémon del tuo avversario finché i suoi PS rimanenti diventano 100.",
			'pt-br': "Coloque contadores de dano em 1 dos Pokémon do seu oponente até o PS restante dele ser 100.",
			'de-de': "Lege so lange Schadensmarken auf 1 Pokémon deines Gegners, bis seine verbleibenden KP gleich 100 sind."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Psyko",
			'en-us': "Psychic",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
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
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567275,
				tcgplayer: 241871
			}
		},
	],
}

export default card
