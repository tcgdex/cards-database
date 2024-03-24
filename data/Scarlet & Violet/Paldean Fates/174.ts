import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Avenging Knuckle",
			fr: "Poing Vengeur",
			es: "Nudillo Vengador",
			it: "Pugno Vendicativo",
			pt: "Punho Vingativo",
			de: "Racheknöchel"
		},

		effect: {
			en: "If any of your Fighting Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 120 more damage.",
			fr: "Si au moins l'un de vos Pokémon Fighting a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon Fighting quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon Fighting è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 120 danni in più.",
			pt: "Se algum dos seus Pokémon Fighting tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn mindestens 1 deiner Fighting-Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Accelerating Stab",
			fr: "Poignard Accélérateur",
			es: "Puñalada Aceleradora",
			it: "Pugnalata Rapida",
			pt: "Estocada Aceleratória",
			de: "Beschleunigter Stich"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Accelerating Stab.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Poignard Accélérateur.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Puñalada Aceleradora.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Estocada Aceleratória.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Beschleunigter Stich nicht einsetzen."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card