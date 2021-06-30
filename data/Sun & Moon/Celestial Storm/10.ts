import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko",
		es: "Sceptile",
		it: "Sceptile",
		pt: "Sceptile",
		de: "Gewaldro"
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
		en: "Grovyle",
		fr: "Massko",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power of Nature",
				fr: "Puissance de la Nature",
				es: "Poder de la Naturaleza",
				it: "Forza della Natura",
				pt: "Natureza Poderosa",
				de: "Naturgewalt"
			},
			effect: {
				en: "Prevent all damage done to your Pokémon that have any Grass Energy attached to them by attacks from your opponent’s Ultra Beasts.",
				fr: "Évitez tous les dégâts infligés par les attaques des Ultra-Chimères de votre adversaire à vos Pokémon auxquels de l’Énergie Grass est attachée.",
				es: "Evita todo el daño infligido a tus Pokémon que tengan alguna Energía Grass unida a ellos por ataques de los Ultraentes de tu rival.",
				it: "Previeni tutti i danni inflitti ai tuoi Pokémon, che hanno delle Energie Grass assegnate, dagli attacchi delle Ultracreature del tuo avversario.",
				pt: "Previne todo o dano causado aos seus Pokémon que tenham alguma Energia Grass ligada a eles por ataques das Ultracriaturas do seu oponente.",
				de: "Verhindere allen Schaden, der deinen Pokémon, an die mindestens 1 Grass-Energie angelegt ist, durch Attacken von Ultrabestien deines Gegners zugefügt wird."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Powerful Storm",
				fr: "Tempête Puissante",
				es: "Tormenta Recia",
				it: "Tempestona",
				pt: "Tempestade Poderosa",
				de: "Mächtiger Sturm"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à tous vos Pokémon.",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida a todos tus Pokémon.",
				it: "Questo attacco infligge 20 danni per ogni Energia assegnata ai tuoi Pokémon.",
				pt: "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada a todos os seus Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an alle deine Pokémon angelegten Energien zu."
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



}

export default card
