import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Salamence VMAX",
		'fr-fr': "Drattak VMAX",
		'es-es': "Salamence VMAX",
		'it-it': "Salamence VMAX",
		'pt-br': "Salamence VMAX",
		'de-de': "Brutalanda VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [373],
	set: Set,
	hp: 320,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Salamence V",
		'fr-fr': "Drattak-V",
		'es-es': "Salamence V",
		'it-it': "Salamence-V",
		'pt-br': "Salamence V",
		'de-de': "Brutalanda-V"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sonic Double",
				'fr-fr': "Double Sonique",
				'es-es': "Doble Sónico",
				'it-it': "Doppiosonico",
				'pt-br': "Dupla Sônica",
				'de-de': "Doppelschall"
			},
			effect: {
				'en-us': "This attack does 40 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 40 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 40 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 40 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 40 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				'en-us': "Max Wings",
				'fr-fr': "Ailomax",
				'es-es': "Maxialas",
				'it-it': "Ali Max",
				'pt-br': "Asas Max",
				'de-de': "Dyna-Flügel"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't use Max Wings.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Ailomax.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede usar Maxialas.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Ali Max.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Asas Max.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon Dyna-Flügel nicht einsetzen."
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


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 483854,
				tcgplayer: 219320
			}
		},
	],
}

export default card
