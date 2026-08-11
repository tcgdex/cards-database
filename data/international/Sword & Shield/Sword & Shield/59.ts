import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Inteleon",
		'fr-fr': "Lézargus",
		'es-es': "Inteleon",
		'it-it': "Inteleon",
		'pt-br': "Inteleon",
		'de-de': "Intelleon"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Drizzile",
		'fr-fr': "Arrozard",
		'es-es': "Drizzile",
		'it-it': "Drizzile",
		'pt-br': "Drizzile",
		'de-de': "Phlegleon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Silent Shot",
				'fr-fr': "Coup Feutré",
				'es-es': "Disparo Silencioso",
				'it-it': "Colpo Silente",
				'pt-br': "Disparo Silencioso",
				'de-de': "Stiller Schuss"
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
				'pt-br': "Descarte 1 carta aleatória da mão do seu oponente.",
				'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Snipe",
				'fr-fr': "Hydro-Frappe",
				'es-es': "Disparo Acuático",
				'it-it': "Idromira",
				'pt-br': "Hidroatirador",
				'de-de': "Hydroschütze"
			},
			effect: {
				'en-us': "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
				'fr-fr': "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
				'es-es': "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
				'it-it': "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
				'pt-br': "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
				'de-de': "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It has many hidden capabilities, such as fingertips that can shoot water and a membrane on its back that it can use to glide through the air."
	},

	dexId: [818],

	thirdParty: {
		cardmarket: 427216,
		tcgplayer: 208356
	}
}

export default card
