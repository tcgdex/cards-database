import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Lycanroc VMAX",
		fr: "Lougaroc VMAX",
		es: "Lycanroc VMAX",
		it: "Lycanroc VMAX",
		pt: "Lycanroc VMAX",
		de: "Wolwerock VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	stage: "VMAX",
	illustrator: "Mitsuhiro Arita",

	attacks: [{
		name: {
			en: "Hunting Claw",
			fr: "Griffe de Chasse",
			es: "Garra Cinegética",
			it: "Artiglio Implacabile",
			pt: "Hunting Claw",
			de: "Jagdklauen"
		},

		effect: {
			en: "Knock Out 1 of your opponent's Pokémon in play that has 60 HP or less remaining.",
			fr: "Mettez K.O. l'un des Pokémon en jeu de votre adversaire auquel il reste 60 PV ou moins.",
			es: "Deja Fuera de Combate a 1 de los Pokémon en juego de tu rival al que le queden 60 PS o menos.",
			it: "Metti KO uno dei Pokémon in gioco del tuo avversario che ha 60 PS o meno rimanenti.",
			pt: "Knock Out 1 of your opponent's Pokémon in play that has 60 HP or less remaining.",
			de: "Mache 1 Pokémon deines Gegners im Spiel, das 60 oder weniger verbleibende KP hat, kampfunfähig."
		},

		cost: ["Fighting"]
	}, {
		name: {
			en: "Max Edge",
			fr: "Lamomax",
			es: "Maxifilo",
			it: "Dynafendente",
			pt: "Max Edge",
			de: "Dyna-Kante"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
		en: "Lycanroc V",
		fr: "Lougaroc-V",
		es: "Lycanroc V",
		it: "Lycanroc-V",
		pt: "Lycanroc V",
		de: "Wolwerock-V"
	},

	dexId: [745],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574140,
		tcgplayer: 246713
	}
}

export default card
