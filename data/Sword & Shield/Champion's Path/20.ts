import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Hatterene",
		fr: "Sorcilence",
		es: "Hatterene",
		it: "Hatterene",
		pt: "Hatterene",
		de: "Silembrim"
	},

	illustrator: "Naoki Saito",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Hattrem",
		fr: "Chapotus"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hazard Sensor",
				fr: "Capteur de Danger",
				es: "Sensor de Peligro",
				it: "Sensore di Pericolo",
				pt: "Sensor de Perigo",
				de: "Gefahrensensor"
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
				fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon-ci est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
				es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Confundido.",
				it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO,il Pokémon attaccante viene confuso.",
				pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante ficará Confuso.",
				de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verwirrt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Life Sucker",
				fr: "Aspire-Vie",
				es: "Sorbevidas",
				it: "Aspiravita",
				pt: "Sugador de Vida",
				de: "Lebenssauger"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It emits psychic power strong enough to cause headaches as a deterrent to the approach of others."
	},

	thirdParty: {
		cardmarket: 499955
	}
}

export default card
