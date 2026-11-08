import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'es-es': "Krookodile",
		'it-it': "Krookodile",
		'pt-br': "Krookodile",
		'de-de': "Rabigator"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		553,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chomp Chomp Panic",
				'fr-fr': "Panique Mangeouille",
				'es-es': "Pánico Ñam Ñam",
				'it-it': "Masticapanico",
				'pt-br': "Pânico Nhoc Nhoc",
				'de-de': "Mampfpanik"
			},
			effect: {
				'en-us': "This attack does 50 damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 50 puntos de daño por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 50 danni per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 50 pontos de dano para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
				'es-es': "Triturar",
				'it-it': "Sgranocchio",
				'pt-br': "Mastigada",
				'de-de': "Knirscher"
			},
			effect: {
				'en-us': "Discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 100,

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

	retreat: 3,

	description: {
		'en-us': "When it spots prey, even at a distance of over 30 miles, it swims through the desert as if it were water, then jumps out and chomps them.",
	},

	thirdParty: {
		cardmarket: 372406,
		tcgplayer: 189216
	}
}

export default card
