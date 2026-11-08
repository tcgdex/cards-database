import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Necrozma",
		'fr-fr': "Necrozma",
		'es-es': "Necrozma",
		'it-it': "Necrozma",
		'pt-br': "Necrozma",
		'de-de': "Necrozma"
	},

	illustrator: "Hasuno",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		800,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Barrier Attack",
				'fr-fr': "Attaque d’Obstacle",
				'es-es': "Ataque Barrera",
				'it-it': "Attacco Barriera",
				'pt-br': "Ataque Barreira",
				'de-de': "Angriffsbarriere"
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Special Laser",
				'fr-fr': "Laser Spécial",
				'es-es': "Láser Especial",
				'it-it': "Laser Speciale",
				'pt-br': "Laser Especial",
				'de-de': "Spezial-Laser"
			},
			effect: {
				'en-us': "If this Pokémon has any Special Energy attached to it, this attack does 60 more damage.",
				'fr-fr': "Si de l’Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "100+",

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
		'en-us': "It looks somehow pained as it rages around in search of light, which serves as its energy. It's apparently from another world.",
	},
}

export default card
