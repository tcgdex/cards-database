import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Alolan Persian",
		'fr-fr': "Persian d’Alola",
		'es-es': "Persian de Alola",
		'it-it': "Persian di Alola",
		'pt-br': "Persian de Alola",
		'de-de': "Alola-Snobilikat"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Alolan Meowth",
		'fr-fr': "Miaouss d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Empty Threat",
				'fr-fr': "Menace en l’Air",
				'es-es': "Falsa Amenaza",
				'it-it': "Minacce a Vuoto",
				'pt-br': "Ameaça Vazia",
				'de-de': "Leere Drohung"
			},
			effect: {
				'en-us': "This attack does 30 less damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts de moins multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño menos por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in meno per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a menos vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte weniger mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "90-",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It looks down on everyone other than itself. Its preferred tactics are sucker punches and blindside attacks.",
	},

	thirdParty: {
		cardmarket: 365756,
		tcgplayer: 178932
	}
}

export default card
