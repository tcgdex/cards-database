import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Magnetic Storm",
		fr: "Tempête Magnétique",
		es: "Tormenta Magnética",
		it: "Tempesta Magnetica",
		pt: "Tempestade Magnética",
		de: "Magnetsturm"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque Pokémon en jeu n'a pas de Résistance.",
		en: "Each Pokémon in play has no Resistance.",
		es: "Los Pokémon en juego no tienen ninguna Resistencia.",
		it: "Nessun Pokémon in gioco ha resistenza.",
		pt: "Cada um dos Pokémon em jogo não possui Resistência.",
		de: "Jedes Pokémon im Spiel hat keine Resistenz. Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadionkarte ins Spiel kommt. Wenn eine andere Karte mit dem gleichen Namen im Spiel ist, kannst du diese Karte nicht spielen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 281574,
		tcgplayer: 91228
	}
}

export default card
