import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Lycanroc VMAX",
		'fr-fr': "Lougaroc VMAX",
		'es-es': "Lycanroc VMAX",
		'it-it': "Lycanroc VMAX",
		'pt-br': "Lycanroc VMAX",
		'de-de': "Wolwerock VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	stage: "VMAX",
	illustrator: "Mitsuhiro Arita",

	attacks: [{
		name: {
			'en-us': "Hunting Claw",
			'fr-fr': "Griffe de Chasse",
			'es-es': "Garra Cinegética",
			'it-it': "Artiglio Implacabile",
			'pt-br': "Hunting Claw",
			'de-de': "Jagdklauen"
		},

		effect: {
			'en-us': "Knock Out 1 of your opponent's Pokémon in play that has 60 HP or less remaining.",
			'fr-fr': "Mettez K.O. l'un des Pokémon en jeu de votre adversaire auquel il reste 60 PV ou moins.",
			'es-es': "Deja Fuera de Combate a 1 de los Pokémon en juego de tu rival al que le queden 60 PS o menos.",
			'it-it': "Metti KO uno dei Pokémon in gioco del tuo avversario che ha 60 PS o meno rimanenti.",
			'pt-br': "Knock Out 1 of your opponent's Pokémon in play that has 60 HP or less remaining.",
			'de-de': "Mache 1 Pokémon deines Gegners im Spiel, das 60 oder weniger verbleibende KP hat, kampfunfähig."
		},

		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Max Edge",
			'fr-fr': "Lamomax",
			'es-es': "Maxifilo",
			'it-it': "Dynafendente",
			'pt-br': "Max Edge",
			'de-de': "Dyna-Kante"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 190,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Lycanroc V",
		'fr-fr': "Lougaroc-V",
		'es-es': "Lycanroc V",
		'it-it': "Lycanroc-V",
		'pt-br': "Lycanroc V",
		'de-de': "Wolwerock-V"
	},

	dexId: [745],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574140,
				tcgplayer: 246713
			}
		},
	],
}

export default card
