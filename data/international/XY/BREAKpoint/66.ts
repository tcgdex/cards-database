import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Trevenant BREAK",
		'fr-fr': "Desséliande TURBO",
		'es-es': "Trevenant TURBO",
		'it-it': "Trevenant TURBO",
		'pt-br': "Trevenant TURBO",
		'de-de': "Trombork-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		709,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande",
		'es-es': "Trevenant",
		'it-it': "Trevenant",
		'pt-br': "Trevenant",
		'de-de': "Trombork"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Silent Fear",
				'fr-fr': "Peur Silencieuse",
				'es-es': "Temor Silencioso",
				'it-it': "Timormuto",
				'pt-br': "Temor Silencioso",
				'de-de': "Stille Angst"
			},
			effect: {
				'en-us': "Put 3 damage counters on each of your opponent's Pokémon.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
				'es-es': "Pon 3 contadores de daño en cada uno de los Pokémon de tu rival.",
				'it-it': "Metti tre segnalini danno su ciascuno dei Pokémon del tuo avversario.",
				'pt-br': "Coloque 3 contadores de danos em cada um dos Pokémon do seu oponente.",
				'de-de': "Lege 3 Schadensmarken auf jedes Pokémon deines Gegners."
			},

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 288241,
		tcgplayer: 111560
	}
}

export default card
