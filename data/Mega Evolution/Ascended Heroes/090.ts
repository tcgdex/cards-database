import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		'es-mx': "Shuppet",
		de: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [353],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			'es-mx': "Disparo Espeluznante",
			de: "Spukschuss",
			it: "Colpomistero",
			pt: "Tiro Assustador"
		},

		damage: 20
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
	retreat: 1,
	regulationMark: "I",

	description: {
		en: "It loves to feed on feelings like envy and malice. Its upright horn catches the emotions of people.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869701,
			tcgplayer: 675902
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870275,
			tcgplayer: 676922
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870276,
			tcgplayer: 677062
		}
	},
],
}

export default card
