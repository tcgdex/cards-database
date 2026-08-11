import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Corner",
				'fr-fr': "Coinçage",
				'es-es': "Arrinconar",
				'it-it': "Trappola",
				'pt-br': "Quina",
				'de-de': "Bedrängen"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup Déchirant",
				'es-es': "Golpe Cuchillazo",
				'it-it': "Lacerattacco",
				'pt-br': "Ataque Cortante",
				'de-de': "Schlitzender Schlag"
			},
			effect: {
				'en-us': "This Pokémon can’t use Slashing Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Golpe Cuchillazo durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
				'pt-br': "Este Pokémon não poderá usar Ataque Cortante durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Schlitzender Schlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 80,

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

	retreat: 1,

	description: {
		'en-us': "No matter how strong the Bisharp, it's said that if the blade on its head is chipped, it will retire from its position as the boss.",
	},

	thirdParty: {
		cardmarket: 408324,
		tcgplayer: 201179
	}
}

export default card
