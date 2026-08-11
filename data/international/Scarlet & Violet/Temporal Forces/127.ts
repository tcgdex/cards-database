import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [164],
	set: Set,

	name: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang",
		'es-es': "Noctowl",
		'it-it': "Noctowl",
		'pt-br': "Noctowl",
		'de-de': "Noctuh"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'it-it': "Hoothoot",
		'pt-br': "Hoothoot",
		'de-de': "Hoothoot"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Talon Hunt",
			'fr-fr': "Serres Chasseuses",
			'es-es': "Garra Cazadora",
			'it-it': "Artiglio Cacciatore",
			'pt-br': "Grifas de Caça",
			'de-de': "Klauenjagd"
		},

		effect: {
			'en-us': "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Vous pouvez chercher dans votre deck jusqu'à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Puoi cercare nel tuo mazzo fino a due carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Você pode procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Du kannst dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Its eyes are specially developed to enable it to see clearly even in murky darkness and minimal light.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760757,
				tcgplayer: 542871
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760757,
				tcgplayer: 542871
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 800146,
			}
		},
	],

	illustrator: "toi8",

}

export default card