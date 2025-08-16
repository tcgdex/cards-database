import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
		es: "Kakuna",
		it: "Kakuna",
		pt: "Kakuna",
		de: "Kokuna"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Grass Cushion",
				fr: "Coussin Plante",
				es: "Cojín Planta",
				it: "Cuscino d’Erba",
				pt: "Almofada de Planta",
				de: "Pflanzenpolster"
			},
			effect: {
				en: "If this Pokémon has any Grass Energy attached to it, it takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Si de l’Énergie Grass est attachée à ce Pokémon, il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Si este Pokémon tiene alguna Energía Grass unida a él, los ataques le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
				it: "Se questo Pokémon ha delle Energie Grass assegnate, subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Se este Pokémon tiver alguma Energia Grass ligada a ele, receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Wenn an dieses Pokémon mindestens 1 Grass-Energie angelegt ist, werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
				es: "Picadura",
				it: "Coleomorso",
				pt: "Picada",
				de: "Käferbiss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 368937,
		tcgplayer: 183775
	}
}

export default card
