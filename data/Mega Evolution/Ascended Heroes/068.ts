import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [871],

	name: {
		en: "Hop's Pincurchin ex",
		fr: "Wattapik-ex de Nabil",
		es: "Pincurchin ex de Paul",
		'es-mx': "Pincurchin ex de Paul",
		de: "Hops Britzigel-ex",
		it: "Pincurchin-ex di Hop",
		pt: "Pincurchin ex do Lupo"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack Quills",
			fr: "Contre-Piquants",
			es: "Contraataque Púas",
			'es-mx': "Púas de Contraataque",
			de: "Konterstacheln",
			it: "Contrappunto",
			pt: "Penas de Contra-ataque"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 3 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Spiky Thunder",
			fr: "Tonnerre Piquant",
			es: "Trueno Espinoso",
			'es-mx': "Trueno Punzante",
			de: "Stacheldonner",
			it: "Aculeotuono",
			pt: "Trovão Espinhoso"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675880,
		cardmarket: 869679
	}
}

export default card