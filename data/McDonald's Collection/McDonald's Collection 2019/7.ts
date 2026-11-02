import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Shibuzoh.",
	category: "Pokemon",

	dexId: [92],

	description: {
		en: "Should a strange light be seen flickering in an abandoned building, Gastly is lurking there.",
		de: "Flackert in einem verlassenen alten Gebäude plötzlich ein rätselhaftes Licht auf, hält sich dort ein Nebulak versteckt."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ominous Eyes",
			de: "Unheilvolle Augen"
		},

		effect: {
			en: "Put 1 damage counter on 1 of your opponent’s Pokémon.",
			de: "Lege 1 Schadensmarke auf 1 Pokémon deines Gegners."
		}
	}],

	name: {
		en: "Gastly",
		de: "Nebulak"
	},

	rarity: "None",
	hp: 50,
	types: ["Psychic"],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412879,
				tcgplayer: 200969
			}
		}
	]
}

export default card

