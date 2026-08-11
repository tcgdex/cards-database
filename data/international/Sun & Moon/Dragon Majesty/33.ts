import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 160,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Weed Out",
				'fr-fr': "Filtrage",
				'es-es': "Saneamiento",
				'it-it': "Falcidia",
				'pt-br': "Peneiração",
				'de-de': "Ausjäten"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may choose 3 of your Benched Pokémon. Then, discard your other Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir 3 de vos Pokémon de Banc. Ensuite, défaussez vos autres Pokémon de Banc.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes elegir 3 de tus Pokémon en Banca. Después, descarta tus otros Pokémon en Banca.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scegliere tre dei tuoi Pokémon in panchina. Poi scarta gli altri tuoi Pokémon in panchina.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode escolher 3 dos seus Pokémon no Banco. Em seguida, descarte seus outros Pokémon no Banco.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 3 Pokémon auf deiner Bank wählen. Lege anschließend die anderen Pokémon auf deiner Bank auf deinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Destruction",
				'fr-fr': "Destruction Sombre",
				'es-es': "Destrucción Siniestra",
				'it-it': "Distruzione Oscura",
				'pt-br': "Destruição Obscura",
				'de-de': "Dunkle Zerstörung"
			},
			effect: {
				'en-us': "You may discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Puedes descartar 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Puoi scartare un’Energia assegnata a questo Pokémon. Se lo fai, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Você pode descartar 1 Energia deste Pokémon. Se fizer isto, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Du kannst 1 Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 120,

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

	retreat: 2,

	description: {
		'en-us': "The heads on their arms do not have brains. They use all three heads to consume and destroy everything.",
	},

	thirdParty: {
		cardmarket: 363505,
		tcgplayer: 175431
	}
}

export default card
