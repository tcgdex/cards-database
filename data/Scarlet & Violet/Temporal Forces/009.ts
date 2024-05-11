import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Roserade",
		fr: "Roserade",
		es: "Roserade",
		it: "Roserade",
		pt: "Roserade",
		de: "Roserade"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Poison Point",
			fr: "Point Poison",
			es: "Punto Tóxico",
			it: "Velenopunte",
			pt: "Ponto Venenoso",
			de: "Giftdorn"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene avvelenato.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Envenenado.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bind Down",
			fr: "Astreinte",
			es: "Amarrar",
			it: "Legafermo",
			pt: "Aprisionamento",
			de: "Anbinden"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card