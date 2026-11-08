import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Sceptile",
		'fr-fr': "Jungko",
		'es-es': "Sceptile",
		'it-it': "Sceptile",
		'pt-br': "Sceptile",
		'de-de': "Gewaldro"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Power of Nature",
				'fr-fr': "Puissance de la Nature",
				'es-es': "Poder de la Naturaleza",
				'it-it': "Forza della Natura",
				'pt-br': "Natureza Poderosa",
				'de-de': "Naturgewalt"
			},
			effect: {
				'en-us': "Prevent all damage done to your Pokémon that have any Grass Energy attached to them by attacks from your opponent’s Ultra Beasts.",
				'fr-fr': "Évitez tous les dégâts infligés par les attaques des Ultra-Chimères de votre adversaire à vos Pokémon auxquels de l’Énergie Grass est attachée.",
				'es-es': "Evita todo el daño infligido a tus Pokémon que tengan alguna Energía Grass unida a ellos por ataques de los Ultraentes de tu rival.",
				'it-it': "Previeni tutti i danni inflitti ai tuoi Pokémon, che hanno delle Energie Grass assegnate, dagli attacchi delle Ultracreature del tuo avversario.",
				'pt-br': "Previne todo o dano causado aos seus Pokémon que tenham alguma Energia Grass ligada a eles por ataques das Ultracriaturas do seu oponente.",
				'de-de': "Verhindere allen Schaden, der deinen Pokémon, an die mindestens 1 Grass-Energie angelegt ist, durch Attacken von Ultrabestien deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Powerful Storm",
				'fr-fr': "Tempête Puissante",
				'es-es': "Tormenta Recia",
				'it-it': "Tempestona",
				'pt-br': "Tempestade Poderosa",
				'de-de': "Mächtiger Sturm"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à tous vos Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a todos tus Pokémon.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada a todos os seus Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an alle deine Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It agilely leaps about the jungle and uses the sharp leaves on its arms to strike its prey.",
	},

	thirdParty: {
		cardmarket: 361257,
		tcgplayer: 170818
	}
}

export default card
