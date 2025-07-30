import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Bruxish",
		fr: "Denticrisse",
		es: "Bruxish",
		it: "Bruxish",
		pt: "Bruxish",
		de: "Knirfish"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack",
			fr: "Contre-Attaque",
			es: "Contragolpe",
			it: "Respinta",
			pt: "Contra-ataque",
			de: "Gegenangriff"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Big Bite",
			fr: "Grosse Morsure",
			es: "Gran Mordisco",
			it: "Grande Morso",
			pt: "Mordidona",
			de: "Mächtiger Biss"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Mitsuhiro Arita",

	thirdParty: {
		cardmarket: 794315
	}
}

export default card
