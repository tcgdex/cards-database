import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [388],
	set: Set,

	name: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
		'es-es': "Grotle",
		'it-it': "Grotle",
		'pt-br': "Grotle",
		'de-de': "Chelcarain"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'es-es': "Turtwig",
		'it-it': "Turtwig",
		'pt-br': "Turtwig",
		'de-de': "Chelast"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sun-Drenched Shell",
			'fr-fr': "Carapace Ensoleillée",
			'es-es': "Caparazón Soleado",
			'it-it': "Assolaguscio",
			'pt-br': "Casco Ensolarado",
			'de-de': "Sonnendurchtränkter Panzer"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck un Pokémon Grass, le montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 Pokémon Grass, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo un Pokémon Grass, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por 1 Pokémon Grass no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Grass-Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'pt-br': "Folha Navalha",
			'de-de': "Rasierblatt"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It knows where pure water wells up. It carries fellow Pokémon there on its back.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608431,
				tcgplayer: 263592
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608431,
				tcgplayer: 263592
			}
		},
	],
}

export default card
