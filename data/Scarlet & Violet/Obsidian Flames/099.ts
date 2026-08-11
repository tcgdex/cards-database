import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [971],
	set: Set,

	name: {
		fr: "Toutombe",
		en: "Greavard",
		es: "Greavard",
		it: "Greavard",
		pt: "Greavard",
		de: "Gruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Ronge",
			en: "Gnaw",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Tir Effrayant",
			en: "Spooky Shot",
			es: "Disparo Embrujado",
			it: "Colpomistero",
			pt: "Tiro Assustador",
			de: "Spukschuss"
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
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "It is said that a dog Pokémon that died in the wild without ever interacting with a human was reborn as this Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725179,
				tcgplayer: 509933,
				cardtrader: 255784
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725179,
				tcgplayer: 509933,
				cardtrader: 255784
			}
		},
	],

	illustrator: "Shibuzoh.",

	
}

export default card
