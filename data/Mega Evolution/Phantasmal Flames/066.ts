import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		'es-mx': "Krookodile",
		de: "Rabigator",
		it: "Krookodile",
		pt: "Krookodile"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",
	dexId: [553],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Vengeful Fang",
			fr: "Croc Vindicatif",
			es: "Colmillo Vengativo",
			'es-mx': "Colmillo Vengativo",
			de: "Rächende Reißer",
			it: "Zanna Vendicativa",
			pt: "Presa Vingativa"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 160 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 160 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 160 puntos de daño más.",
			'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 160 puntos de daño más.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 160 Schadenspunkte mehr zu.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 160 danni in più.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 160 pontos de dano a mais."
		},

		damage: "60+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			'es-mx': "Martillar",
			de: "Einhämmern",
			it: "Martello",
			pt: "Martelada"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857641
	}
}

export default card