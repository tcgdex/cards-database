import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Salamence VMAX",
		fr: "Drattak VMAX",
		es: "Salamence VMAX",
		it: "Salamence VMAX",
		pt: "Salamence VMAX",
		de: "Brutalanda VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 320,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Salamence V",
		fr: "Drattak-V"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sonic Double",
				fr: "Double Sonique",
				es: "Doble Sónico",
				it: "Doppiosonico",
				pt: "Dupla Sônica",
				de: "Doppelschall"
			},
			effect: {
				en: "This attack does 40 damage to 2 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 40 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 40 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 40 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 2 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Max Wings",
				fr: "Ailomax",
				es: "Maxialas",
				it: "Ali Max",
				pt: "Asas Max",
				de: "Dyna-Flügel"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Max Wings.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Ailomax.",
				es: "Durante tu próximo turno, este Pokémon no puede usar Maxialas.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Ali Max.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá usar Asas Max.",
				de: "Während deines nächsten Zuges kann dieses Pokémon Dyna-Flügel nicht einsetzen."
			},
			damage: 240,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
