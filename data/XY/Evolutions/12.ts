import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Charizard EX",
		fr: "Dracaufeu EX",
		es: "Charizard EX",
		it: "Charizard EX",
		pt: "Charizard EX",
		de: "Glurak EX"
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
				es: "Ataque Ala",
				it: "Attacco d'Ala",
				pt: "Ataque de Asa",
				de: "Flügelschlag"
			},

			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion Blast",
				fr: "Explo-Combustion",
				es: "Estallido Fuego",
				it: "Combustibomba",
				pt: "Explosão de Combustão",
				de: "Brandbombe"
			},
			effect: {
				en: "This Pokémon can't use Combustion Blast during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Explo-Combustion pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Estallido Fuego durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Combustibomba.",
				pt: "Este Pokémon não poderá usar Explosão de Combustão em sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Brandbombe während deines nächsten Zuges nicht einsetzen."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 293422
	}
}

export default card
