import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
	},

	stage: "Stage1",

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
				'en-us': "Put 3 damage counters on your opponent’s Active Pokémon.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 3 contadores de dano no Pokémon Ativo do seu oponente.",
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

	retreat: 1,

	description: {
		'en-us': "It arrives near the moment of death and steals spirit from the body.",
	},

	thirdParty: {
		cardmarket: 365739,
		tcgplayer: 178915
	}
}

export default card
