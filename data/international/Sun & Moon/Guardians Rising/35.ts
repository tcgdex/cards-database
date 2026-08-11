import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Vanilluxe",
		'fr-fr': "Sorbouboul",
		'es-es': "Vanilluxe",
		'it-it': "Vanilluxe",
		'pt-br': "Vanilluxe",
		'de-de': "Gelatwino"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		584,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Hail",
				'fr-fr': "Grêle",
				'es-es': "Granizo",
				'it-it': "Grandine",
				'pt-br': "Granizo",
				'de-de': "Hagelsturm"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Frozen Breath",
				'fr-fr': "Souffle Gelé",
				'es-es': "Aliento Congelado",
				'it-it': "Spirogelido",
				'pt-br': "Hálito Congelado",
				'de-de': "Bitterkalter Atem"
			},
			effect: {
				'en-us': "You may discard 2 Water Energy from this Pokémon. If you do, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Vous pouvez défausser 2 Énergies Water attachées à ce Pokémon. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Puedes descartar 2 Energías Water de este Pokémon. Si lo haces, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Puoi scartare due Energie Water assegnate a questo Pokémon. Se lo fai, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Você pode descartar 2 Energias Water deste Pokémon. Se fizer isto, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Du kannst 2 Water-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Each of its two heads has a brain, and when they are in agreement, it attacks its enemies by exhaling a violent blizzard.",
	},

	thirdParty: {
		cardmarket: 297497,
		tcgplayer: 130935
	}
}

export default card
