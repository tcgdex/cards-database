import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Tapu Fini",
		'fr-fr': "Tokopisco",
		'es-es': "Tapu Fini",
		'it-it': "Tapu Fini",
		'pt-br': "Tapu Fini",
		'de-de': "Kapu-Kime"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		787,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'es-es': "Hidropulso",
				'it-it': "Idropulsar",
				'pt-br': "Pulso d’Água",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shining Currents",
				'fr-fr': "Courants Scintillants",
				'es-es': "Corrientes Brillantes",
				'it-it': "Correnti Lucenti",
				'pt-br': "Correntezas Luminescentes",
				'de-de': "Schimmernde Gezeiten"
			},
			effect: {
				'en-us': "If any of your Water Pokémon were healed during this turn, this attack does 60 more damage.",
				'fr-fr': "Si l’un de vos Pokémon Water a été soigné pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si alguno de tus Pokémon Water fue curado durante este turno, este ataque hace 60 puntos de daño más.",
				'it-it': "Se uno qualsiasi dei tuoi Pokémon Water è stato curato durante questo turno, questo attacco infligge 60 danni in più.",
				'pt-br': "Se algum dos seus Pokémon Water forem curados durante esta vez de jogar, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn mindestens 1 deiner Water Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "The dense fog it creates brings the downfall and destruction of its confused enemies. Ocean currents are the source of its energy.",
	},
}

export default card
