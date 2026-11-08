import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [35],
	set: Set,

	name: {
		'fr-fr': "Mélofée",
		'en-us': "Clefairy",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Invitation Clair de Lune",
			'en-us': "Moon-Viewing Invitation",
			'es-es': "Invitación de Avistamiento Lunar",
			'it-it': "Guarda Che Luna",
			'pt-br': "Convite Lunar",
			'de-de': "Mondschaueinladung"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Mélofée, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 3 Clefairy and put them onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 3 Clefairy y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Clefairy e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Clefairy no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Piepi und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Claque",
			'en-us': "Smack",
			'es-es': "Palmetazo",
			'it-it': "Schiaffo",
			'pt-br': "Estalo",
			'de-de': "Klatscher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its adorable behavior and cry make it highly popular. However, this cute Pokémon is rarely found.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733630,
				tcgplayer: 516030,
				cardtrader: 261107
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733630,
				tcgplayer: 516030,
				cardtrader: 261107
			}
		},
	],

	illustrator: "ryoma uratsuka",

	
}

export default card
