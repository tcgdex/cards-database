import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [695],
	set: Set,

	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
		'es-es': "Heliolisk",
		'it-it': "Heliolisk",
		'pt-br': "Heliolisk",
		'de-de': "Elezard"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'es-es': "Helioptile",
		'it-it': "Helioptile",
		'pt-br': "Helioptile",
		'de-de': "Eguana"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Parabolic Charge",
			'fr-fr': "Parabocharge",
			'es-es': "Carga Parábola",
			'it-it': "Caricaparabola",
			'pt-br': "Ataque Parabólico",
			'de-de': "Parabolladung"
		},

		effect: {
			'en-us': "Search your deck for up to 4 Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 4 cartes Énergie, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 4 cartas de Energía, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a quattro carte Energia, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 4 cartas de Energia no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 4 Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Electroslug",
			'fr-fr': "Électro Frappe",
			'es-es': "Electropuñetazo",
			'it-it': "Elettropugno",
			'pt-br': "Soco Elétrico",
			'de-de': "Elektroschuss"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794528,
				tcgplayer: 589962
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794528,
				tcgplayer: 589962
			}
		},
	],

	illustrator: "Ryota Murayama",

}

export default card
