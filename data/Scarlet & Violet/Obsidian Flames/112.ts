import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [618],
	set: Set,

	name: {
		fr: "Limonde",
		en: "Stunfisk",
		es: "Stunfisk",
		it: "Stunfisk",
		pt: "Stunfisk",
		de: "Flunschlik"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Piège sur Mesure",
			en: "Custom Trap",
			es: "Trampa Personalizada",
			it: "Trappola su Misura",
			pt: "Arapuca Personalizada",
			de: "Maßgefertigte Falle"
		},

		effect: {
			fr: "Si ce Pokémon est sur le Poste Actif, a un Outil Pokémon attaché et subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 5 marqueurs de dégâts sur le Pokémon Attaquant.",
			en: "If this Pokémon is in the Active Spot, has a Pokémon Tool attached, and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 5 damage counters on the Attacking Pokémon.",
			es: "Si este Pokémon está en el Puesto Activo, tiene una Herramienta Pokémon unida y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 5 contadores de daño en el Pokémon Atacante.",
			it: "Se questo Pokémon è in posizione attiva, ha una carta Oggetto Pokémon assegnata e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti cinque segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon estiver no Campo Ativo, tiver uma Ferramenta Pokémon ligada a ele e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 5 contadores de dano no Pokémon Atacante.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist, eine Pokémon-Ausrüstung an es angelegt ist und es durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 5 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Bagarre",
			en: "Rumble",
			es: "Retumbar",
			it: "Rombo",
			pt: "Estrondo",
			de: "Grollen"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card