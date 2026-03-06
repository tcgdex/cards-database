import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Koraidon ex",
		fr: "Koraidon-ex",
		es: "Koraidon ex",
		'es-mx': "Koraidon ex",
		de: "Koraidon-ex",
		it: "Koraidon-ex",
		pt: "Koraidon ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [1007],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Orichalcum Fang",
			fr: "Croc Orichalque",
			es: "Colmillo Oricalco",
			'es-mx': "Colmillo Oricalco",
			de: "Orichalkum-Fänge",
			it: "Zanna d'Oricalco",
			pt: "Presas de Oricalco"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 120 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 120 danni in più.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 120 pontos de dano a mais."
		},

		damage: "50+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Impact Blow",
			fr: "Coup à Impact",
			es: "Golpe Impactante",
			'es-mx': "Golpe Impactante",
			de: "Einschlag",
			it: "Colpoimpatto",
			pt: "Golpe Impactante"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Impact Blow.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup à Impact.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Einschlag nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoimpatto.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Impactante."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675933,
		cardmarket: 869732
	}
}

export default card