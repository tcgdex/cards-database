import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [733],

	name: {
		'en-us': "Toucannon",
		'fr-fr': "Bazoucan",
		'es-es': "Toucannon",
		'it-it': "Toucannon",
		'pt-br': "Toucannon",
		'de-de': "Tukanon"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Trumbeak",
		'fr-fr': "Piclairon",
		'es-es': "Trumbeak",
		'it-it': "Trumbeak",
		'pt-br': "Trumbeak",
		'de-de': "Trompeck"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Cutoff",
				'fr-fr': "Coupure d'Énergie",
				'es-es': "Corte de Energía",
				'it-it': "Calopotenza",
				'pt-br': "Corte de Energia",
				'de-de': "Energiesperre"
			},
			effect: {
				'en-us': "Discard an Energy from your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Loop Cannon",
				'fr-fr': "Canon Cyclique",
				'es-es': "Cañón en Bucle",
				'it-it': "Cannone Perpetuo",
				'pt-br': "Canhão em Loop",
				'de-de': "Loop-Kanone"
			},
			effect: {
				'en-us': "Put 2 Energy attached to this Pokémon into your hand.",
				'fr-fr': "Ajoutez à votre main 2 Énergies attachées à ce Pokémon.",
				'es-es': "Pon 2 Energías unidas a este Pokémon en tu mano.",
				'it-it': "Prendi due Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 2 Energias ligadas a este Pokémon na sua mão.",
				'de-de': "Nimm 2 an dieses Pokémon angelegte Energien auf deine Hand."
			},
			damage: 160,

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
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "Known for forming harmonious couples, this Pokémon is brought to wedding ceremonies as a good luck charm."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512435,
				tcgplayer: 226603
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512435,
				tcgplayer: 226603
			}
		},
	],
}

export default card
