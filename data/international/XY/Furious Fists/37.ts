import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'es-es': "Jynx",
		'it-it': "Jynx",
		'pt-br': "Jynx",
		'de-de': "Rossana"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Victory Kiss",
				'fr-fr': "Baiser de la Victoire",
				'es-es': "Beso Vencedor",
				'it-it': "Baciovittoria",
				'pt-br': "Beijo da Vitória",
				'de-de': "Siegerkuss"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is on your Bench, you may heal 10 damage from your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez soigner 10 dégâts à votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes curar 10 puntos de daño a tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi curare da 10 danni il tuo Pokémon attivo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver em seu Banco, você poderá curar 10 de danos do seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon auf deiner Bank befindet, 10 Schadenspunkte bei deinem Aktiven Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hug",
				'fr-fr': "Câlin",
				'es-es': "Abrazo",
				'it-it': "Abbraccio",
				'pt-br': "Abraço",
				'de-de': "Hug"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It wiggles its hips as it walks. It can cause people to dance in unison with it.",
	},

	thirdParty: {
		cardmarket: 281701,
		tcgplayer: 92212
	}
}

export default card
