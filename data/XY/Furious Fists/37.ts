import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		pt: "Jynx",
		de: "Rossana"
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
				en: "Victory Kiss",
				fr: "Baiser de la Victoire",
				es: "Beso Vencedor",
				it: "Baciovittoria",
				pt: "Beijo da Vitória",
				de: "Siegerkuss"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may heal 10 damage from your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez soigner 10 dégâts à votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes curar 10 puntos de daño a tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi curare da 10 danni il tuo Pokémon attivo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver em seu Banco, você poderá curar 10 de danos do seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon auf deiner Bank befindet, 10 Schadenspunkte bei deinem Aktiven Pokémon heilen."
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
				en: "Hug",
				fr: "Câlin",
				es: "Abrazo",
				it: "Abbraccio",
				pt: "Abraço",
				de: "Hug"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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



}

export default card
