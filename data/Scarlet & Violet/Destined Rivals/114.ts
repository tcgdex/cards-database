import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario",
		fr: "Lucario",
		de: "Lucario",
		it: "Lucario",
		es: "Lucario",
		pt: "Lucario"
	},

	illustrator: "Nurikabe",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Avenging Knuckle",
			fr: "Poing Vengeur",
			de: "Racheknöchel",
			it: "Pugno Vendicativo",
			es: "Nudillo Vengador",
			pt: "Punho Vingativo"
		},

		effect: {
			en: "If any of your {F} Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 120 more damage.",
			fr: "Si au moins l'un de vos Pokémon {F} a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn mindestens 1 deiner {F}-Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se uno qualsiasi dei tuoi Pokémon {F} è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 120 danni in più.",
			es: "Si alguno de tus Pokémon {F} quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			pt: "Se algum dos seus Pokémon {F} tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 120 pontos de dano a mais."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Accelerating Stab",
			fr: "Poignard Accélérateur",
			de: "Beschleunigter Stich",
			it: "Pugnalata Rapida",
			es: "Puñalada Aceleradora",
			pt: "Estocada Aceleratória"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Accelerating Stab.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Poignard Accélérateur.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Beschleunigter Stich nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Puñalada Aceleradora.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Estocada Aceleratória."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card