import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Flambino",
		en: "Scorbunny",
		es: "Scorbunny",
		it: "Scorbunny",
		pt: "Scorbunny",
		de: "Hopplo"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Super Roussi",
				en: "Super Singe",
				es: "Superquemadura",
				it: "Super Scottata",
				pt: "Super Singe",
				de: "Super-Versengung"
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "A warm-up of running around gets fire energy coursing through this Pokémon's body. Once that happens, it's ready to fight at full power."
	},

	dexId: [813],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
