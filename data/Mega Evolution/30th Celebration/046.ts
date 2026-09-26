import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu",
		pt: "Pikachu"
	},

	illustrator: "svlt",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Get Some Air",
			fr: "Besoin d'Air",
			de: "Frischluft",
			es: "Aire Fresco",
			it: "Prendere Aria",
			'es-mx': "Aire Fresco",
			pt: "Espairecer"
		},

		effect: {
			en: "This Pokémon recovers from all Special Conditions.",
			fr: "Ce Pokémon guérit de tous les États Spéciaux.",
			de: "Dieses Pokémon erholt sich von allen Speziellen Zuständen.",
			es: "Este Pokémon se recupera de todas las Condiciones Especiales.",
			it: "Questo Pokémon guarisce da tutte le condizioni speciali.",
			'es-mx': "Este Pokémon se recupera de todas las Condiciones Especiales.",
			pt: "Este Pokémon se recupera de todas as Condições Especiais."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			de: "Schmetterkick",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			'es-mx': "Patada Devastadora",
			pt: "Chute Poderoso"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907653,
				tcgplayer: 716315
			}
		}
	],
}

export default card
