import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Linoone",
		fr: "Linéon de Galar",
		es: "Linoone de Galar",
		'es-mx': "Linoone de Galar",
		de: "Galar-Geradaks",
		it: "Linoone di Galar",
		pt: "Linoone de Galar"
	},

	illustrator: "Tomowaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [264],
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			'es-mx': "Mordisquear",
			de: "Nagen",
			it: "Rosicchiamento",
			pt: "Roída"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			'es-mx': "Cuchillada con Garra",
			de: "Klauenschlitzer",
			it: "Lacerartiglio",
			pt: "Golpe de Garra"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		en: "It uses its long tongue to taunt opponents. Once the opposition is enraged, this Pokémon hurls itself at the opponent, tackling them forcefully.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869742,
			tcgplayer: 675943
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870344,
			tcgplayer: 676956
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870343,
			tcgplayer: 677096
		}
	},
],
}

export default card
