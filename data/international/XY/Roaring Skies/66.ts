import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
		'es-es': "Fearow",
		'it-it': "Fearow",
		'pt-br': "Fearow",
		'de-de': "Ibitak"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		22,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
		'es-es': "Spearow",
		'it-it': "Spearow",
		'pt-br': "Spearow",
		'de-de': "Habitak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Schnabel"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drill Run",
				'fr-fr': "Tunnelier",
				'es-es': "Taladradora",
				'it-it': "Giravvita",
				'pt-br': "Furação",
				'de-de': "Schlagbohrer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		'en-us': "It has the stamina to fly all day on its broad wings. It fights by using its sharp beak.",
	},

	thirdParty: {
		cardmarket: 282734,
		tcgplayer: 98102
	}
}

export default card
