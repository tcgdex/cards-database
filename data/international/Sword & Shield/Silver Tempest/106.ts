import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [198],
	set: Set,

	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},

	illustrator: "Ligton",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flock",
			'fr-fr': "Nuée",
			'es-es': "Multitud",
			'it-it': "Frotta",
			'pt-br': "Bando",
			'de-de': "Ausschwärmen"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Murkrow and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Cornèbre, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Murkrow y ponlas en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Murkrow e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Murkrow no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Kramurx und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 10
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
	regulationMark: "F",


	description: {
		'en-us': "It searches for shiny things for its boss. Murkrow's presence is said to be unlucky, so many people detest it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682153,
				tcgplayer: 451760
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682153,
				tcgplayer: 451760
			}
		},
	],
}

export default card
