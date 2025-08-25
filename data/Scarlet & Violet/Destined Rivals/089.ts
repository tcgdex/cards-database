import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [826],
	set: Set,

	name: {
		en: "Team Rocket's Orbeetle",
		fr: "Astronelle de la Team Rocket",
		de: "Team Rockets Maritellit",
		it: "Orbeetle del Team Rocket",
		es: "Orbeetle del Team Rocket",
		pt: "Orbeetle da Equipe Rocket",
		'es-mx': "Orbeetle del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rocket Brain",
			fr: "Cerveau Rocket",
			de: "Rocket-Hirn",
			it: "Cervello Rocket",
			es: "Cerebro Rocket",
			pt: "Cérebro Rocket",
			'es-mx': "Cerebro Rocket"
		},

		effect: {
			en: "As often as you like during your turn, you may move 1 damage counter from 1 of your Team Rocket's Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon de la Team Rocket vers un autre de vos Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner Team Rockets Pokémon auf 1 anderes deiner Pokémon verschieben.",
			it: "Durante il tuo turno, puoi spostare un segnalino danno da uno dei tuoi Pokémon del Team Rocket a un altro dei tuoi Pokémon tutte le volte che vuoi.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de uno de tus Pokémon del Team Rocket a otro de tus Pokémon.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus Pokémon da Equipe Rocket para outro Pokémon seu.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes mover 1 contador de daño de 1 de tus Pokémon del Equipo Rocket a otro de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			de: "Psychokinese",
			it: "Psichico",
			es: "Psíquico",
			pt: "Psíquico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			en: "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 40 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "40+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
