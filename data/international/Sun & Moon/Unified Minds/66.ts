import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Eelektross",
		'fr-fr': "Ohmassacre",
		'es-es': "Eelektross",
		'it-it': "Eelektross",
		'pt-br': "Eelektross",
		'de-de': "Zapplarang"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		604,
	],

	hp: 150,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Electric Swamp",
				'fr-fr': "Marais Électrique",
				'es-es': "Pantano Eléctrico",
				'it-it': "Stagno Elettrico",
				'pt-br': "Pântano Elétrico",
				'de-de': "Elektrosumpf"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is in your hand and you have at least 4 Lightning Energy cards in play, you may play this Pokémon onto your Bench. If you do, move any number of Lightning Energy from your other Pokémon to this Pokémon.",
				'fr-fr': "Jouez ce Pokémon sur votre Banc.",
				'es-es': "Pon este Pokémon en tu Banca.",
				'it-it': "Metti questo Pokémon nella tua panchina.",
				'pt-br': "Coloque este Pokémon no seu Banco.",
				'de-de': "Lege dieses Pokémon auf deine Bank."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hover Over",
				'fr-fr': "Flotter",
				'es-es': "Planear por Encima",
				'it-it': "Volteggiare",
				'pt-br': "Flutuar Acima",
				'de-de': "Belauern"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 130,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "With their sucker mouths, they suck in prey. Then they use their fangs to shock the prey with electricity.",
	},

	thirdParty: {
		cardmarket: 388152,
		tcgplayer: 194992
	}
}

export default card
