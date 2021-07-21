import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
		es: "Mewtwo",
		it: "Mewtwo",
		pt: "Mewtwo",
		de: "Mewtu"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
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
				en: "Pressure",
				fr: "Pression",
				es: "Presión",
				it: "Pressione",
				pt: "Pressão",
				de: "Druck"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, any damage done by attacks from your opponent’s Active Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, tous les dégâts infligés par des attaques du Pokémon Actif de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon sea tu Pokémon Activo, cualquier daño infligido por ataques del Pokémon Activo de tu rival se reduce en 20 (antes de aplicar Debilidad y Resistencia).",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, i danni inflitti dagli attacchi del Pokémon attivo del tuo avversario sono ridotti di 20, prima di aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon for seu Pokémon Ativo, qualquer dano causado por ataques do Pokémon Ativo do seu oponente, será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, wird Schaden, der durch Angriffe des Aktiven Pokémon deines Gegners zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
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
				en: "Super Psy Bolt",
				fr: "Super Psy",
				es: "Superrayo Psi",
				it: "Superpsico",
				pt: "Super-raio Psíquico",
				de: "Super-Psischlag"
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



}

export default card
