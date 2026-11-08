import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [192],
	set: Set,

	name: {
		'en-us': "Sunflora",
		'fr-fr': "Héliatronc",
		'es-es': "Sunflora",
		'it-it': "Sunflora",
		'pt-br': "Sunflora",
		'de-de': "Sonnflora"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
		'es-es': "Sunkern",
		'it-it': "Sunkern",
		'pt-br': "Sunkern",
		'de-de': "Sonnkern"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Redirected Sunlight",
			'fr-fr': "Redirection Solaire",
			'es-es': "Luz Solar Reflectada",
			'it-it': "Rifrangisole",
			'pt-br': "Desvio de Luz Solar",
			'de-de': "Umgeleitetes Sonnenlicht"
		},

		effect: {
			'en-us': "This attack does 60 damage for each {R} Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque Énergie {R} attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 60 puntos de daño por cada Energía {R} unida a cada uno de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 60 danni per ogni Energia {R} assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Energia {R} ligada a todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte {R}-Energie 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Mega Drain",
			'fr-fr': "Méga-Sangsue",
			'es-es': "Megaagotar",
			'it-it': "Megassorbimento",
			'pt-br': "Megadreno",
			'de-de': "Megasauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Since it converts sunlight into energy, it is always looking in the direction of the sun.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769343,
				tcgplayer: 550213
			}
		},
	],

	illustrator: "Shinya Komatsu",

}

export default card