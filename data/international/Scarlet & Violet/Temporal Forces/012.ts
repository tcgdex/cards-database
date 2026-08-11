import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [389],
	set: Set,

	name: {
		'en-us': "Torterra ex",
		'fr-fr': "Torterra-ex",
		'es-es': "Torterra ex",
		'it-it': "Torterra-ex",
		'pt-br': "Torterra ex",
		'de-de': "Chelterrar-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
		'es-es': "Grotle",
		'it-it': "Grotle",
		'pt-br': "Grotle",
		'de-de': "Chelcarain"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Forest March",
			'fr-fr': "Marche Sylvestre",
			'es-es': "Marcha Forestal",
			'it-it': "Marcia Forestale",
			'pt-br': "Marcha Florestal",
			'de-de': "Waldwanderung"
		},

		effect: {
			'en-us': "This attack does 30 damage for each of your {G} Pokémon in play.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon {G} en jeu.",
			'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon {G} en juego.",
			'it-it': "Questo attacco infligge 30 danni per ogni tuo Pokémon {G} in gioco.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon {G} em jogo.",
			'de-de': "Diese Attacke fügt für jedes deiner {G}-Pokémon im Spiel 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Jungle Hammer",
			'fr-fr': "Marteau Végétal",
			'es-es': "Martillo Selva",
			'it-it': "Martelgiungla",
			'pt-br': "Martelo da Selva",
			'de-de': "Dschungel-Hammer"
		},

		effect: {
			'en-us': "Heal 50 damage from this Pokémon.",
			'fr-fr': "Soignez 50 dégâts de ce Pokémon.",
			'es-es': "Cura 50 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 50 danni.",
			'pt-br': "Cure 50 pontos de dano deste Pokémon.",
			'de-de': "Heile 50 Schadenspunkte bei diesem Pokémon."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760642,
				tcgplayer: 542658
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 865202,
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Tsuji",

}

export default card