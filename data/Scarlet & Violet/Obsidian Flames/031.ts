import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [322],
	set: Set,

	name: {
		fr: "Chamallot",
		en: "Numel",
		es: "Numel",
		it: "Numel",
		pt: "Numel",
		de: "Camaub"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Magma Ardent",
			en: "Hot Magma",
			es: "Magma Caliente",
			it: "Magma Bollente",
			pt: "Magma Cálido",
			de: "Heißes Magma"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			en: "Your opponent's Active Pokémon is now Burned.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		en: "Magma of almost 2,200 degrees Fahrenheit courses through its body. When it grows cold, the magma hardens and slows it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725111,
				tcgplayer: 509726,
				cardtrader: 255591
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725111,
				tcgplayer: 509726,
				cardtrader: 255591
			}
		},
	],

	illustrator: "Mizue",

	
}

export default card
