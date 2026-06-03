import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Chesnaught",
		fr: "Blindépique",
		es: "Chesnaught",
		'es-mx': "Chesnaught",
		de: "Brigaron",
		it: "Chesnaught",
		pt: "Chesnaught"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [652],
	hp: 180,
	types: ["Grass"],

	evolveFrom: {
		en: "Quilladin"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Needly Armor",
			fr: "Armure Épineuse",
			es: "Armadura de Púas",
			'es-mx': "Armadura Punzante",
			de: "Stachelrüstung",
			it: "Corazza Acuminata",
			pt: "Blindagem Espinhosa"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 3 damage counters on the Attacking Pokémon for each {G} Energy attached to this Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant pour chaque Énergie {G} attachée à ce Pokémon.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante por cada Energía {G} unida a este Pokémon.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante por cada Energía {G} unida a este Pokémon.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon für jede an dieses Pokémon angelegte {G}-Energie.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante per ogni Energia {G} assegnata a questo Pokémon.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante para cada Energia {G} ligada a este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Impound",
			fr: "Confiscation",
			es: "Confiscar",
			'es-mx': "Confinamiento",
			de: "Festsetzen",
			it: "Isolamento",
			pt: "Apreensão"
		},

		cost: ["Grass", "Grass", "Colorless"],
		damage: 160,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693460,
		cardmarket: 886399
	}
}

export default card