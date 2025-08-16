import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [968],
	set: Set,

	name: {
		en: "Orthworm ex",
		fr: "Ferdeter-ex",
		es: "Orthworm ex",
		it: "Orthworm-ex",
		pt: "Orthworm ex",
		de: "Schlurm-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Pummeling Payback",
			fr: "Représailles Martelage",
			es: "Venganza Demoledora",
			it: "Rivincita Furiosa",
			pt: "Vingança Demolidora",
			de: "Faustdicke Vergeltung"
		},

		effect: {
			en: "If this Pokémon is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon for each {M} Energy attached to this Pokémon.",
			fr: "Si ce Pokémon subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant pour chaque Énergie {M} attachée à ce Pokémon.",
			es: "Si este Pokémon resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 2 contadores de daño en el Pokémon Atacante por cada Energía {M} unida a este Pokémon.",
			it: "Se questo Pokémon viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti due segnalini danno sul Pokémon attaccante per ogni Energia {M} assegnata a questo Pokémon.",
			pt: "Se este Pokémon for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 2 contadores de dano no Pokémon Atacante para cada Energia {M} ligada a este Pokémon.",
			de: "Wenn dieses Pokémon durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 2 Schadensmarken auf das Angreifende Pokémon für jede an dieses Pokémon angelegte {M}-Energie."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rock Tomb",
			fr: "Tomberoche",
			es: "Tumba Rocas",
			it: "Rocciotomba",
			pt: "Tumba de Rochas",
			de: "Felsgrab"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Mochizuki",

	thirdParty: {
		cardmarket: 785964
	}
}

export default card
