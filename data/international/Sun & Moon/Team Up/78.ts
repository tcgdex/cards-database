import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Kabutops",
		'fr-fr': "Kabutops",
		'es-es': "Kabutops",
		'it-it': "Kabutops",
		'pt-br': "Kabutops",
		'de-de': "Kabutops"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fossilized Memories",
				'fr-fr': "Souvenirs Fossilisés",
				'es-es': "Recuerdos Fosilizados",
				'it-it': "Reminiscenze Fossili",
				'pt-br': "Memórias Fossilizadas",
				'de-de': "Fossile Erinnerungen"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Supporter cards from their hand.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Supporter de sa main.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede jugar ninguna carta de Partidario de su mano.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può giocare le carte Aiuto che ha in mano.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, seu oponente não poderá jogar nenhuma carta de Apoiador da própria mão.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Unterstützerkarten aus seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Slide",
				'fr-fr': "Éboulement",
				'es-es': "Avalancha",
				'it-it': "Frana",
				'pt-br': "Deslize de Pedras",
				'de-de': "Steinhagel"
			},
			effect: {
				'en-us': "This attack does 20 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its body had begun to change so it could function on land. But it didn't adapt in time and went extinct.",
	},

	thirdParty: {
		cardmarket: 369008,
		tcgplayer: 183856
	}
}

export default card
