import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'es-es': "Machamp",
		'it-it': "Machamp",
		'pt-br': "Machamp",
		'de-de': "Machomei"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Badge of Discipline",
				'fr-fr': "Badge de la Discipline",
				'es-es': "Medalla a la Disciplina",
				'it-it': "Medaglia Disciplina",
				'pt-br': "Distintivo da Disciplina",
				'de-de': "Zeugnis der Selbstkontrolle"
			},
			effect: {
				'en-us': "The damage of each of your Fighting Pokémon’s attacks isn’t affected by Resistance.",
				'fr-fr': "Les dégâts des attaques de chacun de vos Pokémon Fighting ne sont pas affectés par la Résistance.",
				'es-es': "El daño de los ataques de cada uno de tus Pokémon Fighting no se ve afectado por Resistencia.",
				'it-it': "Il danno degli attacchi di ciascuno dei tuoi Pokémon Fighting non è influenzato dalla resistenza.",
				'pt-br': "Os danos de ataque de cada um de seus Pokémon Fighting não são afetados por Resistência.",
				'de-de': "Der Schaden jedes Angriffs deiner Fighting-Pokémon wird durch Resistenz nicht verändert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Close Combat",
				'fr-fr': "Close Combat",
			},
			effect: {
				'en-us': "Flip a coin. If tails, during your opponent's next turn, any damage done to this Pokémon by attacks is increased by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Lancez une pièce. Si c'est pile, pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont augmentés de 30 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its four muscled arms slam foes with powerful punches and chops at blinding speed.",
	},

	thirdParty: {
		cardmarket: 281070,
		tcgplayer: 86969
	}
}

export default card
