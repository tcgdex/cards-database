import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Turtonator",
		fr: "Boumata",
		es: "Turtonator",
		de: "Tortunator",
		it: "Turtonator",
		pt: "Turtonator"
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		776
	],
	hp: 120,
	types: [
		"Fire"
	],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shell Spikes",
				fr: "Carapace à Piques",
				es: "Púas del Caparazón",
				de: "Panzerstacheln",
				it: "Gusciopunte",
				pt: "Espinhos de Carapaça"
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), discard an Energy from the Attacking Pokémon.",
				fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), défaussez une Énergie du Pokémon Attaquant.",
				es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), descarta 1 Energía del Pokémon Atacante.",
				de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 1 Energie vom Angreifenden Pokémon auf den Ablagestapel deines Gegners.",
				it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, scarta un'Energia dal Pokémon attaccante.",
				pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), descarte uma Energia do Pokémon Atacante."
			}
		}
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			name: {
				en: "Heat Breath",
				fr: "Souffle Ardent",
				es: "Aliento Ardiente",
				de: "Heißer Atem",
				it: "Alitorovente",
				pt: "Bafo de Calor"
			},
			damage: "80+",
			effect: {
				en: "Flip a coin. If heads, this attack does 80 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 80 pontos de dano a mais."
			}
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Hasuno",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684407,
		cardmarket: 877429
	}
}

export default card
