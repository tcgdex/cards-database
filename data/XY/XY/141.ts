import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Venusaur EX",
		fr: "Florizarre EX",
		es: "Venusaur EX",
		it: "Venusaur EX",
		pt: "Venusaur EX",
		de: "Bisaflor EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Powder",
				fr: "Poudre Toxik",
				es: "Polvo Veneno",
				it: "Velenpolvere",
				pt: "Pó Venenoso",
				de: "Giftpuder"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jungle Hammer",
				fr: "Marteau Végétal",
				es: "Martillo Selva",
				it: "Martelgiungla",
				pt: "Martelo da Selva",
				de: "Dschungel-Hammer"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 de danos deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281338
	}
}

export default card
