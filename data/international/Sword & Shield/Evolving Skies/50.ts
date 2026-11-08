import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",
	illustrator: "Mitsuhiro Arita",

	attacks: [{
		name: {
			'en-us': "Big Sparking",
			'fr-fr': "Étincelle Géante",
			'es-es': "Gran Chispazo",
			'it-it': "Granscintilla",
			'pt-br': "Big Sparking",
			'de-de': "Großer Funke"
		},

		effect: {
			'en-us': "This attack does 50 damage to each Pokémon V and Pokémon-GX (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à chacun des Pokémon-V et Pokémon-GX (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a cada Pokémon V y Pokémon-GX (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a ciascun Pokémon-V e Pokémon-GX, sia tuo che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "This attack does 50 damage to each Pokémon V and Pokémon-GX (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'de-de': "Diese Attacke fügt jedem Pokémon-V und Pokémon-GX (deinen und denen deines Gegners) 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Thunderbolt",
			'fr-fr': "Tonnerre",
			'es-es': "Rayo",
			'it-it': "Fulmine",
			'pt-br': "Thunderbolt",
			'de-de': "Donnerblitz"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Discard all Energy from this Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	description: {
		'en-us': "If its electric pouches run empty, it raises its tail to gather electricity from the atmosphere."
	},

	dexId: [26],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574074,
				tcgplayer: 246886
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574074,
				tcgplayer: 246886
			}
		},
	],
}

export default card
