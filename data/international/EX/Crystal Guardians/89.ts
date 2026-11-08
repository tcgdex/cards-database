import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Aggron ex",
		'fr-fr': "Galeking ex",
		'de-de': "Stolloss ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Intimidating Armor",
				'fr-fr': "Armure intimidante",
				'de-de': "Einschüchternde Rüstung"
			},
			effect: {
				'en-us': "As long as Aggron ex is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers or Poké-Bodies.",
				'fr-fr': "Tant que Galeking ex est votre Pokémon Actif, les Pokémon de base de votre adversaire ne peuvent pas attaquer ni utiliser de Poké-Powers ou de Poké-Bodies.",
				'de-de': "Solange Stolloss ex dein Aktives Pokémon ist, können die Basis-Pokémon deines Gegners nicht angreifen oder ihre Poké-Power oder Poké-Body benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Split Bomb",
				'fr-fr': "Bombe fendante",
				'de-de': "Splitterbombe"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 2 Pokémon deines Gegners. Dieser Angriff fügt beiden gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Burn",
				'fr-fr': "Méga brûlure",
				'de-de': "Megaverbrennung"
			},
			effect: {
				'en-us': "During your next turn, Aggron ex can't use Mega Burn.",
				'fr-fr': "Lors de votre prochain tour, Galeking ex ne pourra pas utiliser Méga brûlure.",
				'de-de': "Während deines nächsten Zuges kann Stolloss ex Megaverbrennung nicht einsetzen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 4,

	thirdParty: {
		cardmarket: 277170,
		tcgplayer: 83484
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
