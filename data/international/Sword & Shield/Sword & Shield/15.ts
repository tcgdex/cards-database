import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Rillaboom",
		'fr-fr': "Gorythmic",
		'es-es': "Rillaboom",
		'it-it': "Rillaboom",
		'pt-br': "Rillaboom",
		'de-de': "Gortrom"
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
		'en-us': "Thwackey",
		'fr-fr': "Badabouin",
		'es-es': "Thwackey",
		'it-it': "Thwackey",
		'pt-br': "Thwackey",
		'de-de': "Chimstix"
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
				'en-us': "Drum Roll",
				'fr-fr': "Roulement de Tambour",
				'es-es': "Redoble de Tambor",
				'it-it': "Rullo di Tamburi",
				'pt-br': "Rufar os Tambores",
				'de-de': "Trommelwirbel"
			},
			effect: {
				'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				'en-us': "Drum Beating",
				'fr-fr': "Tambour Battant",
				'es-es': "Batería Asalto",
				'it-it': "Tamburattacco",
				'pt-br': "Toque do Tambor",
				'de-de': "Trommelschläge"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't use Drum Beating.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tambour Battant.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede usar Batería Asalto.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Tamburattacco.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Toque do Tambor.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon Trommelschläge nicht einsetzen."
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
		'en-us': "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle."
	},

	dexId: [812],

	thirdParty: {
		cardmarket: 427196,
		tcgplayer: 208294
	}
}

export default card
