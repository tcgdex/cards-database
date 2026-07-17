import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It was modeled after a mighty Pokémon of myth. The mask placed upon it limits its power in order to keep it under control.",
		de: "Typ:Null ist eine künstliche Nachbildung eines Pokémon aus einer alten Sage. Die Maske dient dazu, seine Kräfte unter Kontrolle zu halten."
	},

	name: {
		en: "Type: Null",
		fr: "Type:0",
		es: "Código Cero",
		'es-mx': "Código Cero",
		de: "Typ:Null"
	},

	illustrator: "Ligton",
	rarity: "Common",
	category: "Pokemon",
	dexId: [772],
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Power Edge",
			de: "Kraftklinge"
		},

		cost: ["Colorless", "Colorless"],

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895853,
				tcgplayer: 704826
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895853,
				tcgplayer: 704826
			}
		},
	],
}

export default card
