import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'fr-fr': "Évoli",
		'en-us': "Eevee",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Courage !",
			'en-us': "Cheer Up",
			'es-es': "Alegrón",
			'it-it': "Incitare",
			'pt-br': "Animar",
			'de-de': "Aufmuntern"
		},

		effect: {
			'fr-fr': "Attachez une carte Énergie de votre main à l'un de vos Pokémon.",
			'en-us': "Attach an Energy card from your hand to 1 of your Pokémon.",
			'es-es': "Une 1 carta de Energía de tu mano a uno de tus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon una carta Energia dalla tua mano.",
			'pt-br': "Ligue uma carta de Energia da sua mão a 1 dos seus Pokémon.",
			'de-de': "Lege 1 Energiekarte aus deiner Hand an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Koud'Pied",
			'en-us': "Kick",
			'es-es': "Patada",
			'it-it': "Calcio",
			'pt-br': "Chute",
			'de-de': "Tritt"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725246,
				tcgplayer: 509689,
				cardtrader: 255851
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725246,
				tcgplayer: 509689,
				cardtrader: 255851
			}
		},
	],

	illustrator: "ryoma uratsuka",

	
}

export default card
