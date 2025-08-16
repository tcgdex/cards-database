import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		pt: "Drifblim",
		de: "Drifzepeli"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Drifting Balloon",
				fr: "Ballon Flottant",
				es: "Globo a la Deriva",
				it: "Pallonderiva",
				pt: "Balão à Deriva",
				de: "Gleitballon"
			},
			effect: {
				en: "This Pokémon’s attacks cost Colorless less for each of your opponent’s Team Plasma Pokémon in play.",
				fr: "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon de la Team Plasma de votre adversaire en jeu.",
				es: "Los ataques de este Pokémon cuestan Colorless menos por cada uno de los Pokémon del Equipo Plasma de tu rival en juego.",
				it: "Gli attacchi di questo Pokémon costano Colorless in meno per ogni Pokémon del Team Plasma del tuo avversario in gioco.",
				pt: "O ataque deste Pokémon custa Colorless a menos para cada Pokémon da Equipe Plasma do oponente em jogo.",
				de: "Die Angriffskosten dieses Pokémon verringern sich um Colorless für jedes Team Plasma-Pokémon, das dein Gegner im Spiel hat."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Derail",
				fr: "Déraillement",
			},
			effect: {
				en: "Discard a Special Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 281056,
		tcgplayer: 84951
	}
}

export default card
