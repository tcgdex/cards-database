import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Cosmog",
		fr: "Cosmog",
		es: "Cosmog",
		it: "Cosmog",
		pt: "Cosmog",
		de: "Cosmog"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		789,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cosmic Guard",
				fr: "Barrière Cosmique",
				es: "Guardia Cósmica",
				it: "Guardia Cosmica",
				pt: "Proteção Cósmica",
				de: "Kosmische Wacht"
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent’s).",
				fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
				es: "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
				it: "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon dagli attacchi, sia tuoi che del tuo avversario.",
				pt: "Enquanto este Pokémon estiver no seu Banco, prevenirá todo o dano causado a este Pokémon por ataques (seus e do seu oponente).",
				de: "Solang sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Attacken (deine und die deines Gegners) zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mumble",
				fr: "Murmure",
				es: "Farfullar",
				it: "Borbottio",
				pt: "Resmungo",
				de: "Grummeln"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 368999
	}
}

export default card
