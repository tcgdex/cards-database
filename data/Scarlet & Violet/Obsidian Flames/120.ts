import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Craparoi-ex",
		en: "Klawf ex",
		es: "Klawf ex",
		it: "Klawf-ex",
		pt: "Klawf ex",
		de: "Klibbe-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Pince Contre-Attaque",
			en: "Counterattacking Pincer",
			es: "Contraataque Pinza",
			it: "Controchela",
			pt: "Pinças de Contra-ataque",
			de: "Konterkneifer"
		},

		effect: {
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), défaussez une Énergie du Pokémon Attaquant.",
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), discard an Energy from the Attacking Pokémon.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), descarta 1 Energía del Pokémon Atacante.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, scarta un'Energia dal Pokémon attaccante.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), descarte uma Energia do Pokémon Atacante.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 1 Energie vom Angreifenden Pokémon auf den Ablagestapel deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Pression de Chute",
			en: "Falling Press",
			es: "Presión Descendente",
			it: "Caduta Pressa",
			pt: "Queda Compressora",
			de: "Fallpresse"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 80 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "aky CG Works"
}

export default card