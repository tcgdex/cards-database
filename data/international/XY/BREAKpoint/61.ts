import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		680,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Stab Deeply",
				'fr-fr': "Blessure Profonde",
				'es-es': "Puñalada Profunda",
				'it-it': "Pugnalata Affondo",
				'pt-br': "Facada Profunda",
				'de-de': "Tiefer Stich"
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent's Active Pokémon.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 3 contadores de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 3 Schadensmarken auf das Aktive Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The complex attack patterns of its two swords are unstoppable, even for an opponent greatly accomplished at swordplay.",
	},

	thirdParty: {
		cardmarket: 288236,
		tcgplayer: 111602
	}
}

export default card
