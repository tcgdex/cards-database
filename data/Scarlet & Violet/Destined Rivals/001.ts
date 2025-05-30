import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Ethan's Pinsir",
		fr: "Scarabrute de Luth",
		de: "Klarins Pinsir",
		it: "Pinsir di Armonio",
		es: "Pinsir de Eco",
		pt: "Pinsir do Ethan"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			de: "Klammer",
			it: "Presa",
			es: "Agarre",
			pt: "Agarramento Compressor"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rallying Horn",
			fr: "Corne de Ralliement",
			de: "Anspornhorn",
			it: "Incitacorno",
			es: "Cuerno de Apoyo",
			pt: "Chifre Fortificante"
		},

		effect: {
			en: "If any of your Ethan's Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 100 more damage.",
			fr: "Si au moins l'un de vos Pokémon de Luth a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn mindestens 1 deiner Klarins Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se uno qualsiasi dei tuoi Pokémon di Armonio è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 100 danni in più.",
			es: "Si alguno de tus Pokémon de Eco quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 100 puntos de daño más.",
			pt: "Se algum dos seus Pokémon do Ethan tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 100 pontos de dano a mais."
		},

		damage: "70+"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card