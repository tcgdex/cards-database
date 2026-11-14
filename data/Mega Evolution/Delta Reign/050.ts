import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Sandslash",
		fr: "Sablaireau",
		de: "Sandamer",
		es: "Sandslash",
		it: "Sandslash",
		pt: "Sandslash",
		'es-mx': "Sandslash"
	},

	illustrator: "aoki",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack Quills",
			fr: "Contre-Piquants",
			de: "Konterstacheln",
			es: "Contraataque Púas",
			it: "Contrappunto",
			pt: "Penas de Contra-ataque",
			'es-mx': "Púas de Contraataque"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 3 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante."
		}
	}],

	attacks: [{
		name: {
			en: "Digging Claw",
			fr: "Griffe Excavatrice",
			de: "Buddelklaue",
			es: "Garra Excavadora",
			it: "Scavartiglio",
			pt: "Garras de Escavação",
			'es-mx': "Garra Excavadora"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			'es-mx': "Descarta la primera carta del mazo de tu rival."
		},

		damage: 60,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728027,
				cardmarket: 918872
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728027,
				cardmarket: 918872
			}
		}
	],
}

export default card