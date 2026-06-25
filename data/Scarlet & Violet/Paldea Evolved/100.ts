import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [957],
	set: Set,

	name: {
		fr: "Forgerette",
		en: "Tinkatink",
		es: "Tinkatink",
		it: "Tinkatink",
		pt: "Tinkatink",
		de: "Forgita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Collecte",
			en: "Collect",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta",
			de: "Sammeln"
		},

		effect: {
			fr: "Piochez une carte.",
			en: "Draw a card.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			de: "Ziehe 1 Karte."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Poing Tire-Bouchon",
			en: "Corkscrew Punch",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			de: "Korkenzieherhieb"
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

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715575,
				tcgplayer: 497515,
				cardtrader: 248729
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715575,
				tcgplayer: 497515,
				cardtrader: 248729
			}
		},
	],

	illustrator: "Mizue",

	description: {
		en: "It swings its handmade hammer around to protect itself, but the hammer is often stolen by Pokémon that eat metal.",
	},
}

export default card
