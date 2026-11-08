import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [826],
	set: Set,

	name: {
		'en-us': "Team Rocket's Orbeetle",
		'fr-fr': "Astronelle de la Team Rocket",
		'de-de': "Team Rockets Maritellit",
		'it-it': "Orbeetle del Team Rocket",
		'es-es': "Orbeetle del Team Rocket",
		'pt-br': "Orbeetle da Equipe Rocket",
		'es-mx': "Orbeetle del Equipo Rocket"
	},


	illustrator: "Shin Nagasawa",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Team Rocket's Dottler",
		'fr-fr': "Coléodôme de la Team Rocket",
		'de-de': "Team Rockets Keradar",
		'it-it': "Dottler del Team Rocket",
		'es-es': "Dottler del Team Rocket",
		'pt-br': "Dottler da Equipe Rocket",
		'es-mx': "Dottler del Equipo Rocket"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rocket Brain",
			'fr-fr': "Cerveau Rocket",
			'de-de': "Rocket-Hirn",
			'it-it': "Cervello Rocket",
			'es-es': "Cerebro Rocket",
			'pt-br': "Cérebro Rocket",
			'es-mx': "Cerebro Rocket"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may move 1 damage counter from 1 of your Team Rocket's Pokémon to another of your Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon de la Team Rocket vers un autre de vos Pokémon.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner Team Rockets Pokémon auf 1 anderes deiner Pokémon verschieben.",
			'it-it': "Durante il tuo turno, puoi spostare un segnalino danno da uno dei tuoi Pokémon del Team Rocket a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de uno de tus Pokémon del Team Rocket a otro de tus Pokémon.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus Pokémon da Equipe Rocket para outro Pokémon seu.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes mover 1 contador de daño de 1 de tus Pokémon del Equipo Rocket a otro de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'de-de': "Psychokinese",
			'it-it': "Psichico",
			'es-es': "Psíquico",
			'pt-br': "Psíquico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825963,
				tcgplayer: 632898
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825963,
				tcgplayer: 632898
			}
		},
	],
}

export default card
