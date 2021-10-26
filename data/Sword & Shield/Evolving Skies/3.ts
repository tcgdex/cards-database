import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Skiploom",
		fr: "Floravol",
		es: "Skiploom",
		it: "Skiploom",
		pt: "Skiploom",
		de: "Hubelupf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",
	illustrator: "kirisAki",

	abilities: [{
		type: "Ability",

		name: {
			en: "Solar Evolution",
			fr: "Évolution Solaire",
			es: "Evolución Solar",
			it: "Evoluzione Solare",
			pt: "Solar Evolution",
			de: "Solarentwicklung"
		},

		effect: {
			en: "When you attach an Energy card from your hand to this Pokémon during your turn, you may search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon pendant votre tour, vous pouvez chercher dans votre deck une carte Évolution de ce Pokémon, puis la placer sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			es: "Cuando unes 1 carta de Energía de tu mano a este Pokémon durante tu turno, puedes buscar en tu baraja 1 carta que evolucione de este Pokémon y ponerla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			it: "Quando assegni a questo Pokémon una carta Energia dalla tua mano durante il tuo turno, puoi cercare nel tuo mazzo una carta che si evolve da questo Pokémon e mettercela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			pt: "When you attach an Energy card from your hand to this Pokémon during your turn, you may search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			de: "Wenn du während deines Zuges 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, kannst du dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, durchsuchen und sie auf dieses Pokémon legen, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Spinning Attack",
			de: "Rundumangriff"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,

	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol",
		es: "Hoppip",
		it: "Hoppip",
		pt: "Hoppip",
		de: "Hoppspross"
	},

	description: {
		en: "It spreads its petals to absorb sunlight. It also floats in the air to get closer to the sun."
	},

	dexId: [188],
	regulationMark: "E"
}

export default card