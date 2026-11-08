import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [127],
	set: Set,

	name: {
		'en-us': "Ethan's Pinsir",
		'fr-fr': "Scarabrute de Luth",
		'de-de': "Klarins Pinsir",
		'it-it': "Pinsir di Armonio",
		'es-es': "Pinsir de Eco",
		'pt-br': "Pinsir do Ethan",
		'es-mx': "Pinsir de Ethan"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'de-de': "Klammer",
			'it-it': "Presa",
			'es-es': "Agarre",
			'pt-br': "Agarramento Compressor",
			'es-mx': "Fuerza de Garra"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rallying Horn",
			'fr-fr': "Corne de Ralliement",
			'de-de': "Anspornhorn",
			'it-it': "Incitacorno",
			'es-es': "Cuerno de Apoyo",
			'pt-br': "Chifre Fortificante",
			'es-mx': "Cuerno Solidario"
		},

		effect: {
			'en-us': "If any of your Ethan's Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 100 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon de Luth a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wenn mindestens 1 deiner Klarins Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon di Armonio è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 100 danni in più.",
			'es-es': "Si alguno de tus Pokémon de Eco quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 100 puntos de daño más.",
			'pt-br': "Se algum dos seus Pokémon do Ethan tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 100 pontos de dano a mais.",
			'es-mx': "Si alguno de tus Pokémon de Ethan quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 100 puntos de daño más."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825875,
				tcgplayer: 632829
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825875,
				tcgplayer: 632829
			}
		},
	],

}

export default card
