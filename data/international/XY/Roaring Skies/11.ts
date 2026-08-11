import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Shedinja",
		'fr-fr': "Munja",
		'es-es': "Shedinja",
		'it-it': "Shedinja",
		'pt-br': "Shedinja",
		'de-de': "Ninjatom"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		292,
	],

	hp: 30,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nincada",
		'fr-fr': "Ningale",
		'es-es': "Nincada",
		'it-it': "Nincada",
		'pt-br': "Nincada",
		'de-de': "Nincada"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Cursed Rain",
				'fr-fr': "Pluie Ensorcelée",
				'es-es': "Lluvia Maldita",
				'it-it': "Pioggia Maledetta",
				'pt-br': "Chuva Amaldiçoada",
				'de-de': "Verfluchter Regen"
			},
			effect: {
				'en-us': "Put 1 damage counter on each of your opponent's Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Pon 1 contador de daño en cada uno de los Pokémon de tu rival. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Metti un segnalino danno su ciascuno dei Pokémon del tuo avversario. Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Coloque 1 contador de danos em cada um dos Pokémon do seu oponente. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Schadensmarke auf jedes Pokémon deines Gegners. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hopeless Scream",
				'fr-fr': "Cri de Désespoir",
				'es-es': "Grito Desesperado",
				'it-it': "Urla Disperate",
				'pt-br': "Grito do Desespero",
				'de-de': "Schrei der Verzweiflung"
			},
			effect: {
				'en-us': "This attack does 50 damage times the number of damage counters on this Pokémon.",
				'fr-fr': "Cette attaque inflige 50 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
				'es-es': "Este ataque hace 50 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 50 danni per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 50 de danos vezes o número de contadores de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 50 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "50×",

		},
	],

	retreat: 1,

	description: {
		'en-us': "A most peculiar Pokémon that somehow appears in a Poké Ball when a Nincada evolves.",
	},

	thirdParty: {
		cardmarket: 282679,
		tcgplayer: 98047
	}
}

export default card
