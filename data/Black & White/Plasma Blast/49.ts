import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
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
		en: "Machoke",
		fr: "Machopeur",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Badge of Discipline",
				fr: "Badge de la Discipline",
				es: "Medalla a la Disciplina",
				it: "Medaglia Disciplina",
				pt: "Distintivo da Disciplina",
				de: "Zeugnis der Selbstkontrolle"
			},
			effect: {
				en: "The damage of each of your Fighting Pokémon’s attacks isn’t affected by Resistance.",
				fr: "Les dégâts des attaques de chacun de vos Pokémon Fighting ne sont pas affectés par la Résistance.",
				es: "El daño de los ataques de cada uno de tus Pokémon Fighting no se ve afectado por Resistencia.",
				it: "Il danno degli attacchi di ciascuno dei tuoi Pokémon Fighting non è influenzato dalla resistenza.",
				pt: "Os danos de ataque de cada um de seus Pokémon Fighting não são afetados por Resistência.",
				de: "Der Schaden jedes Angriffs deiner Fighting-Pokémon wird durch Resistenz nicht verändert."
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
				en: "Close Combat",
				fr: "Close Combat",
			},
			effect: {
				en: "Flip a coin. If tails, during your opponent's next turn, any damage done to this Pokémon by attacks is increased by 30 (after applying Weakness and Resistance).",
				fr: "Lancez une pièce. Si c'est pile, pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont augmentés de 30 (après application de la Faiblesse et de la Résistance).",
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



}

export default card
