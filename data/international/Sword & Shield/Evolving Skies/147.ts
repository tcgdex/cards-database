import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Elemental Badge",
		'fr-fr': "Badge Élémentaire",
		'es-es': "Medalla Elemental",
		'it-it': "Medaglia degli Elementi",
		'pt-br': "Insígnia Elemental",
		'de-de': "Elementarorden"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If the Pokémon V this card is attached to has \"Vaporeon,\" \"Jolteon,\" or \"Flareon\" in its name, its attacks cost Colorless less.",
		'fr-fr': "Si le Pokémon-V auquel cette carte est attachée a \" Aquali \", \" Voltali \" ou \" Pyroli \" dans son nom, ses attaques coûtent Colorless de moins.",
		'es-es': "Si el Pokémon V al que está unida esta carta tiene \"Vaporeon\", \"Jolteon\" o \"Flareon\" en su nombre, sus ataques cuestan Colorless menos.",
		'it-it': "Se il Pokémon-V a cui è assegnata questa carta ha \"Vaporeon\", \"Jolteon\" o \"Flareon\" nel nome, il costo dei suoi attacchi è ridotto di Colorless.",
		'pt-br': "Se o Pokémon V ao qual esta carta está ligada tiver \"Vaporeon\", \"Jolteon\" ou \"Flareon\" em seu nome, seus ataques custarão Colorless a menos.",
		'de-de': "Wenn bei dem Pokémon-V, an das diese Karte angelegt ist, \"Aquana\", \"Blitza\" oder \"Flamara\" zum Namen gehört, verringern sich die Kosten seiner Attacken um Colorless."
	},

	trainerType: "Tool",
	illustrator: "Studio Bora Inc.",
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574205,
				tcgplayer: 246772
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574205,
				tcgplayer: 246772
			}
		},
	],
}

export default card
