import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		fr: "Caninos",
		en: "Growlithe",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Évaporation",
			en: "Vaporize",
			es: "Vaporizar",
			it: "Vaporizzare",
			pt: "Evaporar",
			de: "Vaporisieren"
		},

		effect: {
			fr: "Défaussez une Énergie {W} du Pokémon Actif de votre adversaire.",
			en: "Discard a {W} Energy from your opponent's Active Pokémon.",
			es: "Descarta 1 Energía {W} del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia {W} dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia {W} do Pokémon Ativo do seu oponente.",
			de: "Lege 1 {W}-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733653,
				tcgplayer: 516247,
				cardtrader: 261122
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733653,
				tcgplayer: 516247,
				cardtrader: 261122
			}
		},
	],

	illustrator: "Atsushi Furusawa",

	
}

export default card
