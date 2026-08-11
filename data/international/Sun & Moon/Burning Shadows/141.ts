import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Noivern GX",
		'fr-fr': "Bruyverne GX",
		'es-es': "Noivern GX",
		'it-it': "Noivern GX",
		'pt-br': "Noivern GX",
		'de-de': "UHaFnir GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		715,
	],

	hp: 200,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Distort",
				'fr-fr': "Torsion",
				'es-es': "Distorsionar",
				'it-it': "Distorsione",
				'pt-br': "Distorcer",
				'de-de': "Knistern"
			},
			effect: {
				'en-us': "Your opponent can’t play any Item cards from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Objeto de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare le carte Strumento che ha in mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhuma carta de Item da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Sonic Volume",
				'fr-fr': "Volume Sonique",
				'es-es': "Volumen Sónico",
				'it-it': "Volume Audio",
				'pt-br': "Volume Sônico",
				'de-de': "Schallvolumen"
			},
			effect: {
				'en-us': "Your opponent can’t play any Special Energy cards from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte Énergie spéciale de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Energía Especial de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare le carte Energia speciale che ha in mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhuma carta de Energia Especial da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Spezial-Energiekarten aus seiner Hand spielen."
			},
			damage: 120,

		},
		{
			cost: [
				"Darkness",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Boomburst GX",
				'fr-fr': "Bang Sonique GX",
				'es-es': "Estruendo GX",
				'it-it': "Ondaboato-GX",
				'pt-br': "Rajada Explosiva GX",
				'de-de': "Überschallknall GX"
			},
			effect: {
				'en-us': "This attack does 50 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 50 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 50 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 50 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 299539,
		tcgplayer: 138594
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
