import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [500],
	set: Set,

	name: {
		'en-us': "Emboar",
		'fr-fr': "Roitiflam",
		'de-de': "Flambirex",
		'it-it': "Emboar",
		'pt-br': "Emboar",
		'es-es': "Emboar",
		'es-mx': "Emboar"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
		'de-de': "Ferkokel",
		'it-it': "Pignite",
		'pt-br': "Pignite",
		'es-es': "Pignite",
		'es-mx': "Pignite"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Inferno Fandango",
			'fr-fr': "Tango Infernal",
			'de-de': "Tango Inferno",
			'it-it': "Fandango Infernale",
			'pt-br': "Inferno Fandango",
			'es-es': "Infierno Fandango",
			'es-mx': "Fandango Infernal"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may attach a Basic {R} Energy card from your hand to 1 of your Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {R} de base de votre main à l'un de vos Pokémon.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Basis-{R}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen.",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base {R} dalla tua mano tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia {R} Básica da sua mão a 1 dos seus Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {R} Básica de tu mano a uno de tus Pokémon.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes unir 1 carta de Energía {R} Básica de tu mano a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Crash",
			'fr-fr': "Tacle Feu",
			'de-de': "Brandstempel",
			'it-it': "Marchiafuoco",
			'pt-br': "Choque de Calor",
			'es-es': "Golpe Calor",
			'es-mx': "Golpe de Calor"
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835925,
				tcgplayer: 642128
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 835925,
				tcgplayer: 642128
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836515,
				tcgplayer: 642373
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836516,
				tcgplayer: 642301
			}
		},
	],
}

export default card
