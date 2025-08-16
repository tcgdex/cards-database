import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [925],
	set: Set,

	name: {
		en: "Maushold ex",
		fr: "Famignol-ex",
		es: "Maushold ex",
		it: "Maushold-ex",
		pt: "Maushold ex",
		de: "Famieps-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Solidarity",
			fr: "Solidarité",
			es: "Solidaridad",
			it: "Solidarietà",
			pt: "Solidariedade",
			de: "Solidarität"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon for each of your Tandemaus, Maushold, and Maushold ex in play.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant pour chacun de vos Compagnol, Famignol et Famignol-ex en jeu.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante por cada uno de tus Tandemaus, Maushold y Maushold ex en juego.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante per ogni tuo Tandemaus, Maushold e Maushold-ex in gioco.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante para cada um dos seus Tandemaus, Maushold e Maushold ex em jogo.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon für jedes Zwieps, Famieps und Famieps-ex im Spiel."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Nom-Nom-Nom Incisors",
			fr: "Triple Incisive",
			es: "Incisivos Ñam-Ñam-Ñam",
			it: "Incisivi Masticanti",
			pt: "Incisivos Nham-nham-nham",
			de: "Mjam-Mjam-Mjam-Nager"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		},

		damage: 120
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics"
}

export default card