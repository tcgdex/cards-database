import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [586],
	set: Set,

	name: {
		'en-us': "Sawsbuck",
		'fr-fr': "Haydaim",
		'es-es': "Sawsbuck",
		'it-it': "Sawsbuck",
		'pt-br': "Sawsbuck",
		'de-de': "Kronjuwild"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
		'es-es': "Deerling",
		'it-it': "Deerling",
		'pt-br': "Deerling",
		'de-de': "Sesokitz"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Changing Seasons",
			'fr-fr': "Changement de Saison",
			'es-es': "Cambio de Estaciones",
			'it-it': "Alternastagioni",
			'pt-br': "Mudança de Estações",
			'de-de': "Wechsel der Jahreszeiten"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Stade, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Estadio, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Stadio, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por uma carta de Estádio no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Stadionkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Superpowered Horns",
			'fr-fr': "Cornes Surpuissantes",
			'es-es': "Cuernos Superpoderosos",
			'it-it': "Corna Superpotenziate",
			'pt-br': "Chifres Superpoderosos",
			'de-de': "Superstarke Hörner"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "Sawsbuck in their Autumn Form are known for having very short tempers. The males fight each other incessantly.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760647,
				tcgplayer: 542762
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760647,
				tcgplayer: 542762
			}
		},
	],

	illustrator: "Akira Komayama",

}

export default card