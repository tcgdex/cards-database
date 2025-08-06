import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Terrakion",
		fr: "Terrakium",
		de: "Terrakium",
		it: "Terrakion",
		pt: "Terrakion",
		es: "Terrakion",
		'es-mx': "Terrakion"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Retaliate",
			fr: "Vengeance",
			de: "Heimzahlung",
			it: "Nemesi",
			pt: "Retaliação",
			es: "Represalia",
			'es-mx': "Represalia"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 80 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 80 danni in più.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 80 pontos de dano a mais.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 80 puntos de daño más."
		},

		damage: "50+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
			de: "Schollenbrecher",
			it: "Schiacciaterra",
			pt: "Aperto de Terra",
			es: "Aterrizaje",
			'es-mx': "Aplastamiento Terrestre"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836001
	}
}

export default card