import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [950],
	set: Set,

	name: {
		'fr-fr': "Craparoi-ex",
		'en-us': "Klawf ex",
		'es-es': "Klawf ex",
		'it-it': "Klawf-ex",
		'pt-br': "Klawf ex",
		'de-de': "Klibbe-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Pince Contre-Attaque",
			'en-us': "Counterattacking Pincer",
			'es-es': "Contraataque Pinza",
			'it-it': "Controchela",
			'pt-br': "Pinças de Contra-ataque",
			'de-de': "Konterkneifer"
		},

		effect: {
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), défaussez une Énergie du Pokémon Attaquant.",
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), discard an Energy from the Attacking Pokémon.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), descarta 1 Energía del Pokémon Atacante.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, scarta un'Energia dal Pokémon attaccante.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), descarte uma Energia do Pokémon Atacante.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 1 Energie vom Angreifenden Pokémon auf den Ablagestapel deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Pression de Chute",
			'en-us': "Falling Press",
			'es-es': "Presión Descendente",
			'it-it': "Caduta Pressa",
			'pt-br': "Queda Compressora",
			'de-de': "Fallpresse"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 80 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725200,
				tcgplayer: 509869,
				cardtrader: 255805
			}
		},
	],

	suffix: "ex",
	illustrator: "aky CG Works",

	
}

export default card
