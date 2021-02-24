import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Séléroc",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		337,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sol Shade",
				fr: "Sol-Ombre",
			},
			effect: {
				en: "If you have Solrock in play, Fire Pokémon in play (both yours and your opponent's) have no Abilities, except Pokémon-GX and Pokémon-EX.",
				fr: "Si vous avez Solaroc en jeu, les Pokémon Fire en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent, à l’exception des Pokémon-GX et des Pokémon-EX.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyshock",
				fr: "Choc Psy",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
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



}

export default card
