import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Rillaboom",
		fr: "Gorythmic",
		es: "Rillaboom",
		it: "Rillaboom",
		pt: "Rillaboom",
		de: "Gortrom"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Thwackey",
		fr: "Badabouin",
		es: "Thwackey",
		it: "Thwackey",
		pt: "Thwackey",
		de: "Chimstix"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Drum Roll",
				fr: "Roulement de Tambour",
				es: "Redoble de Tambor",
				it: "Rullo di Tamburi",
				pt: "Rufar os Tambores",
				de: "Trommelwirbel"
			},
			effect: {
				en: "This attack also does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Drum Beating",
				fr: "Tambour Battant",
				es: "Batería Asalto",
				it: "Tamburattacco",
				pt: "Toque do Tambor",
				de: "Trommelschläge"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Drum Beating.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tambour Battant.",
				es: "Durante tu próximo turno, este Pokémon no puede usar Batería Asalto.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Tamburattacco.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá usar Toque do Tambor.",
				de: "Während deines nächsten Zuges kann dieses Pokémon Trommelschläge nicht einsetzen."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle."
	}
}

export default card
