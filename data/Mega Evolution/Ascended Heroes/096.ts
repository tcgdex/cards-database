import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Trevenant",
		fr: "Desséliande de Nabil",
		es: "Trevenant de Paul",
		'es-mx': "Trevenant de Paul",
		de: "Hops Trombork",
		it: "Trevenant di Hop",
		pt: "Trevenant do Lupo"
	},

	illustrator: "matazo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Horrifying Revenge",
			fr: "Vengeance Horrifiante",
			es: "Venganza Espeluznante",
			'es-mx': "Venganza Terrorífica",
			de: "Grauenhafte Rache",
			it: "Vendetta Orripilante",
			pt: "Vingança Aterrorizante"
		},

		effect: {
			en: "If any of your Hop's Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 100 more damage.",
			fr: "Si au moins l'un de vos Pokémon de Nabil a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon de Paul quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si alguno de tus Pokémon de Paul quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 100 puntos de daño más.",
			de: "Wenn mindestens 1 deiner Hops Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se uno qualsiasi dei tuoi Pokémon di Hop è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 100 danni in più.",
			pt: "Se algum dos seus Pokémon do Lupo tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 100 pontos de dano a mais."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			'es-mx': "Arrinconar",
			de: "Bedrängen",
			it: "Trappola",
			pt: "Quina"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675908,
		cardmarket: 869707
	}
}

export default card