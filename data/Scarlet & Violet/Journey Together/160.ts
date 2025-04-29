import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Maractus",
		fr: "Maracachi",
		es: "Maractus",
		de: "Maracamba",
		it: "Maractus",
		pt: "Maractus",
		'es-mx': "Maractus"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Exploding Needles",
			fr: "Épines Explosives",
			es: "Espinas Explosivas",
			de: "Explodierende Stacheln",
			it: "Deflagrazione di Aculei",
			pt: "Espinhos Explosivos",
			'es-mx': "Espinas Explosivas"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, put 6 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 6 contadores de daño en el Pokémon Atacante.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 6 Schadensmarken auf das Angreifende Pokémon.",
			it: "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, metti sei segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque 6 contadores de dano no Pokémon Atacante.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 6 contadores de daño en el Pokémon Atacante."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			de: "Bedrängen",
			it: "Trappola",
			pt: "Quina",
			'es-mx': "Arrinconar"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
