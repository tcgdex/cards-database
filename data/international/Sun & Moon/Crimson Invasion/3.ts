import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'es-es': "Beedrill",
		'it-it': "Beedrill",
		'pt-br': "Beedrill",
		'de-de': "Bibor"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sudden Sting",
				'fr-fr': "Piqûre Inattendue",
				'es-es': "Picotazo Repentino",
				'it-it': "Rapidospina",
				'pt-br': "Estocada Súbita",
				'de-de': "Plötzlicher Stich"
			},
			effect: {
				'en-us': "If this Pokémon evolved from Kakuna during this turn, your opponent’s Active Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Si ce Pokémon a évolué de Coconfort pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
				'es-es': "Si este Pokémon ha evolucionado de Kakuna durante este turno, el Pokémon Activo de tu rival pasa a estar Paralizado y Envenenado.",
				'it-it': "Se questo Pokémon si è evoluto da Kakuna durante questo turno, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
				'pt-br': "Se este Pokémon evoluiu de Kakuna durante esta vez de jogar, o Pokémon Ativo do seu oponente será Paralisado e Envenenado.",
				'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Kokuna entwickelt hat, ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sharp Sting",
				'fr-fr': "Piqûre Pointue",
				'es-es': "Aguijón Afilado",
				'it-it': "Tagliospina",
				'pt-br': "Ferroada Afiada",
				'de-de': "Scharfer Stich"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.",
	},

	thirdParty: {
		cardmarket: 311853,
		tcgplayer: 149024
	}
}

export default card
