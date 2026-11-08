import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [876],
	set: Set,

	name: {
		'fr-fr': "Wimessir",
		'en-us': "Indeedee",
		'es-es': "Indeedee",
		'it-it': "Indeedee",
		'pt-br': "Indeedee",
		'de-de': "Servol"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	attacks: [{
		name: {
			'fr-fr': "Coup d'Main",
			'en-us': "Helping Hand",
			'es-es': "Refuerzo",
			'it-it': "Altruismo",
			'pt-br': "Mãozinha",
			'de-de': "Rechte Hand"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Énergie de base, puis attachez-la à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a basic Energy card and attach it to 1 of your Benched Pokémon. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Básica y únela a 1 de tus Pokémon en Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base e assegnala a uno dei tuoi Pokémon in panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Energia básica no seu baralho e ligue-a a 1 dos seus Pokémon no Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an 1 Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
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
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It uses the horns on its head to sense the emotions of others. Males will act as valets for those they serve, looking after their every need."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539303,
				tcgplayer: 232547
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539303,
				tcgplayer: 232547
			}
		},
	],
}

export default card
