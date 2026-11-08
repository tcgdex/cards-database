import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mewtwo",
		'fr-fr': "Mewtwo",
		'es-es': "Mewtwo",
		'it-it': "Mewtwo",
		'pt-br': "Mewtwo",
		'de-de': "Mewtu"
	},
	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 120,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Pressure",
				'fr-fr': "Pression",
				'es-es': "Presión",
				'it-it': "Pressione",
				'pt-br': "Pressão",
				'de-de': "Druck"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, any damage done by attacks from your opponent’s Active Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, tous les dégâts infligés par des attaques du Pokémon Actif de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, cualquier daño infligido por ataques del Pokémon Activo de tu rival se reduce en 20 (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, i danni inflitti dagli attacchi del Pokémon attivo del tuo avversario sono ridotti di 20, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Enquanto este Pokémon for seu Pokémon Ativo, qualquer dano causado por ataques do Pokémon Ativo do seu oponente, será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, wird Schaden, der durch Angriffe des Aktiven Pokémon deines Gegners zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Super Psy Bolt",
				'fr-fr': "Super Psy",
				'es-es': "Superrayo Psi",
				'it-it': "Superpsico",
				'pt-br': "Super-raio Psíquico",
				'de-de': "Super-Psischlag"
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "A Pokémon created by recombining Mew's genes. It's said to have the most savage heart among Pokémon.",
	},
}

export default card
