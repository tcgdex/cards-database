import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [776],

	name: {
		'en-us': "Turtonator",
		'fr-fr': "Boumata",
		'es-es': "Turtonator",
		'es-mx': "Turtonator",
		'de-de': "Tortunator",
		'it-it': "Turtonator",
		'pt-br': "Turtonator"
	},

	illustrator: "Hasuno",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Shell Spikes",
			'fr-fr': "Carapace à Piques",
			'es-es': "Púas del Caparazón",
			'es-mx': "Púas del Caparazón",
			'de-de': "Panzerstacheln",
			'it-it': "Gusciopunte",
			'pt-br': "Espinhos de Carapaça"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), discard an Energy from the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), défaussez une Énergie du Pokémon Attaquant.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), descarta 1 Energía del Pokémon Atacante.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), descarta 1 Energía del Pokémon Atacante.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 1 Energie vom Angreifenden Pokémon auf den Ablagestapel deines Gegners.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, scarta un'Energia dal Pokémon attaccante.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), descarte uma Energia do Pokémon Atacante."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Breath",
			'fr-fr': "Souffle Ardent",
			'es-es': "Aliento Ardiente",
			'es-mx': "Aliento Ígneo",
			'de-de': "Heißer Atem",
			'it-it': "Alitorovente",
			'pt-br': "Bafo de Calor"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 80 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 80 pontos de dano a mais."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684407,
				cardmarket: 877429
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684407,
				cardmarket: 877429
			}
		}
	],

}

export default card
