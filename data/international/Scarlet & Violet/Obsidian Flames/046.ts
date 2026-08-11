import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [318],
	set: Set,

	name: {
		fr: "Carvanha",
		en: "Carvanha",
		es: "Carvanha",
		it: "Carvanha",
		pt: "Carvanha",
		de: "Kanivanha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Croc Aiguisé",
			en: "Sharp Fang",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "These Pokémon have sharp fangs and powerful jaws. Sailors avoid Carvanha dens at all costs.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725126,
				tcgplayer: 509763,
				cardtrader: 255606
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725126,
				tcgplayer: 509763,
				cardtrader: 255606
			}
		},
	],

	illustrator: "Jerky",

	
}

export default card
