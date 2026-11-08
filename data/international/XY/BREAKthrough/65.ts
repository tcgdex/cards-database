import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'es-es': "Misdreavus",
		'it-it': "Misdreavus",
		'pt-br': "Misdreavus",
		'de-de': "Traunfugil"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Haunt",
				'fr-fr': "Hanter",
				'es-es': "Espanto",
				'it-it': "Infestare",
				'pt-br': "Assombrar",
				'de-de': "Spuk"
			},
			effect: {
				'en-us': "Put 2 damage counters on your opponent's Active Pokémon.",
				'fr-fr': "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 2 contadores de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti due segnalini danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 2 contadores de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 2 Schadensmarken auf das Aktive Pokémon deines Gegners."
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

	retreat: 1,

	description: {
		'en-us': "It likes playing mischievous tricks, such as screaming and wailing to startle people at night.",
	},

	thirdParty: {
		cardmarket: 286311,
		tcgplayer: 107184
	}
}

export default card
