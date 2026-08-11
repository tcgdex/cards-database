import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [979],
	set: Set,

	name: {
		'en-us': "Annihilape",
		'fr-fr': "Courrousinge",
		'es-es': "Annihilape",
		'it-it': "Annihilape",
		'pt-br': "Annihilape",
		'de-de': "Epitaff"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Rage Fist",
			'fr-fr': "Poing de Colère",
			'es-es': "Puño Furia",
			'it-it': "Pugno Furibondo",
			'pt-br': "Punho Feroz",
			'de-de': "Zornesfaust"
		},

		effect: {
			'en-us': "This attack does 70 damage for each Prize card your opponent has taken.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chaque carte Récompense que votre adversaire a récupérée.",
			'es-es': "Este ataque hace 70 puntos de daño por cada carta de Premio que haya cogido tu rival.",
			'it-it': "Questo attacco infligge 70 danni per ogni carta Premio presa dal tuo avversario.",
			'pt-br': "Este ataque causa 70 pontos de dano para cada carta de Prêmio que seu oponente pegou.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Dynamite Punch",
			'fr-fr': "Poing Dynamite",
			'es-es': "Puño Dinamita",
			'it-it': "Pugno Dinamite",
			'pt-br': "Soco Dinamite",
			'de-de': "Dynamitstoß"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "Anesaki Dynamic",

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "It imbues its fists with the power of the rage that it kept hidden in its heart. Opponents struck by these imbued fists will be shattered to their core.",
	},

	thirdParty: {
        cardmarket: 702405,
        tcgplayer: 486617
    }
}

export default card