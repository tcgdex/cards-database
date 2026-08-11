import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [998],
	set: Set,

	name: {
		'en-us': "Baxcalibur",
		'fr-fr': "Glaivodo",
		'es-es': "Baxcalibur",
		'it-it': "Baxcalibur",
		'pt-br': "Baxcalibur",
		'de-de': "Espinodon"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Arctibax",
		'fr-fr': "Cryodo",
		'es-es': "Arctibax",
		'it-it': "Arctibax",
		'pt-br': "Arctibax",
		'de-de': "Cryospino"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Super Cold",
			'fr-fr': "Super Froid",
			'es-es': "Superfrío",
			'it-it': "Super Freddo",
			'pt-br': "Superfrio",
			'de-de': "Unfassbare Kälte"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may attach a Basic {W} Energy card from your hand to 1 of your Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {W} de base de votre main à l'un de vos Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {W} Básica de tu mano a uno de tus Pokémon.",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base {W} dalla tua mano tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia {W} Básica da sua mão a 1 dos seus Pokémon.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Basis-{W}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Buster Tail",
			'fr-fr': "Queue Destructrice",
			'es-es': "Cola Destructora",
			'it-it': "Coda Distruttrice",
			'pt-br': "Cauda Aniquiladora",
			'de-de': "Zertrümmernder Schweif"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751669,
				tcgplayer: 534521,
				cardtrader: 274314
			}
		},
	],

	illustrator: "GOSSAN",

	description: {
		'en-us': "This Pokémon blasts cryogenic air out from its mouth. This air can instantly freeze even liquid-hot lava.",
	},

}

export default card
