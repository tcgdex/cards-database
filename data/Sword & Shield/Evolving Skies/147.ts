import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Elemental Badge",
		fr: "Badge Élémentaire",
		es: "Medalla Elemental",
		it: "Medaglia degli Elementi",
		pt: "Insígnia Elemental",
		de: "Elementarorden"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "If the Pokémon V this card is attached to has \"Vaporeon,\" \"Jolteon,\" or \"Flareon\" in its name, its attacks cost Colorless less.",
		fr: "Si le Pokémon-V auquel cette carte est attachée a \" Aquali \", \" Voltali \" ou \" Pyroli \" dans son nom, ses attaques coûtent Colorless de moins.",
		es: "Si el Pokémon V al que está unida esta carta tiene \"Vaporeon\", \"Jolteon\" o \"Flareon\" en su nombre, sus ataques cuestan Colorless menos.",
		it: "Se il Pokémon-V a cui è assegnata questa carta ha \"Vaporeon\", \"Jolteon\" o \"Flareon\" nel nome, il costo dei suoi attacchi è ridotto di Colorless.",
		pt: "Se o Pokémon V ao qual esta carta está ligada tiver \"Vaporeon\", \"Jolteon\" ou \"Flareon\" em seu nome, seus ataques custarão Colorless a menos.",
		de: "Wenn bei dem Pokémon-V, an das diese Karte angelegt ist, \"Aquana\", \"Blitza\" oder \"Flamara\" zum Namen gehört, verringern sich die Kosten seiner Attacken um Colorless."
	},

	trainerType: "Tool",
	illustrator: "Studio Bora Inc.",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574205
	}
}

export default card