import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'es-es': "Drifblim",
		'it-it': "Drifblim",
		'pt-br': "Drifblim",
		'de-de': "Drifzepeli"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'es-es': "Drifloon",
		'it-it': "Drifloon",
		'pt-br': "Drifloon",
		'de-de': "Driftlon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Eerie Wave",
				'fr-fr': "Vague Étrange",
				'es-es': "Onda Sobrecogedora",
				'it-it': "Ondamistero",
				'pt-br': "Onda Misteriosa",
				'de-de': "Gespenstische Woge"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Burst Curse",
				'fr-fr': "Malédiction en Rafale",
				'es-es': "Maldición Explosiva",
				'it-it': "Maledizione Esplosiva",
				'pt-br': "Maldição Explosiva",
				'de-de': "Geplatzter Fluch"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to this Pokémon. Put 8 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Défaussez 2 Énergies attachées à ce Pokémon. Placez 8 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Descarta 2 Energías unidas a este Pokémon. Pon 8 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon. Distribuisci a piacimento otto segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Descarte 2 Energias ligadas a este Pokémon. Coloque 8 contadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				'de-de': "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel. Verteile 8 Schadensmarken beliebig auf die Pokémon deines Gegners."
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
		'en-us': "It's drowsy in daytime, but flies off in the evening in big groups. No one knows where they go.",
	},

	thirdParty: {
		cardmarket: 291538,
		tcgplayer: 121136
	}
}

export default card
