import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [562],
	set: Set,

	name: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'es-es': "Yamask",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'de-de': "Makabaja"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Ominous Eyes",
			'fr-fr': "Regard Menaçant",
			'es-es': "Ojos Aciagos",
			'it-it': "Sguardo Malevolo",
			'pt-br': "Olhos Tenebrosos",
			'de-de': "Unheilvolle Augen"
		},

		effect: {
			'en-us': "Put 3 damage counters on 1 of your opponent's Pokémon.",
			'fr-fr': "Placez 3 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			'es-es': "Pon 3 contadores de daño en uno de los Pokémon de tu rival.",
			'it-it': "Metti tre segnalini danno su uno dei Pokémon del tuo avversario.",
			'pt-br': "Coloque 3 contadores de dano em 1 dos Pokémon do seu oponente.",
			'de-de': "Lege 3 Schadensmarken auf 1 Pokémon deines Gegners."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The spirit of a person from a bygone age became this Pokémon. It rambles through ruins, searching for someone who knows its face.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740567,
				tcgplayer: 523735,
				cardtrader: 265189
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740567,
				tcgplayer: 523735,
				cardtrader: 265189
			}
		},
	],

	illustrator: "Misa Tsutsui",

	
}

export default card
