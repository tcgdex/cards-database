import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Magikarp & Wailord GX",
		'fr-fr': "Magicarpe et Wailord GX",
		'es-es': "Magikarp y Wailord GX",
		'it-it': "Magikarp e Wailord GX",
		'pt-br': "Magikarp e Wailord GX",
		'de-de': "Karpador & Wailord GX"
	},

	illustrator: "OOYAMA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
		321
	],

	hp: 300,

	types: [
		"Water",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Super Splash",
				'fr-fr': "Super Éclaboussure",
				'es-es': "Supersalpicadura",
				'it-it': "Super Splash",
				'pt-br': "Superborrifada",
				'de-de': "Superplatscher"
			},

			damage: 180,

		},
		{
			cost: [
				"Water",
			],

			name: {
				'en-us': "Towering Splash GX",
				'fr-fr': "Éclaboussure Imposante GX",
				'es-es': "Salpicadura Imponente GX",
				'it-it': "Splash Anomalo GX",
				'pt-br': "Borrifada Gigantesca GX",
				'de-de': "Turmhoher Platscher GX"
			},

			effect: {
				'en-us': "If this Pokémon has at least 7 extra Water Energy attached to it (in addition to this attack’s cost), this attack does 100 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Si au moins 7 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Si este Pokémon tiene por lo menos 7 Energías Water adicionales unidas a él (además de las del coste de este ataque), este ataque hace 100 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se questo Pokémon ha almeno sette Energie Water extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 100 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se este Pokémon tiver pelo menos 7 Energias Water adicionais ligadas a ele (além do custo deste ataque), este ataque causará 100 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "Wenn an dieses Pokémon mindestens 7 extra Water-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke jedem Pokémon auf der Bank deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 369086,
		tcgplayer: 183964
	}
}

export default card
