import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Aggron ex",
		fr: "Galeking ex",
		de: "Stolloss ex"
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
		en: "Lairon",
		fr: "Galegon"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Armor",
				fr: "Armure intimidante",
				de: "Einschüchternde Rüstung"
			},
			effect: {
				en: "As long as Aggron ex is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers or Poké-Bodies.",
				fr: "Tant que Galeking ex est votre Pokémon Actif, les Pokémon de base de votre adversaire ne peuvent pas attaquer ni utiliser de Poké-Powers ou de Poké-Bodies.",
				de: "Solange Stolloss ex dein Aktives Pokémon ist, können die Basis-Pokémon deines Gegners nicht angreifen oder ihre Poké-Power oder Poké-Body benutzen."
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
				en: "Split Bomb",
				fr: "Bombe fendante",
				de: "Splitterbombe"
			},
			effect: {
				en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 2 Pokémon deines Gegners. Dieser Angriff fügt beiden gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				en: "Mega Burn",
				fr: "Méga brûlure",
				de: "Megaverbrennung"
			},
			effect: {
				en: "During your next turn, Aggron ex can't use Mega Burn.",
				fr: "Lors de votre prochain tour, Galeking ex ne pourra pas utiliser Méga brûlure.",
				de: "Während deines nächsten Zuges kann Stolloss ex Megaverbrennung nicht einsetzen."
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
