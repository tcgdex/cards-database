import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Charizard EX",
		'fr-fr': "Dracaufeu EX",
		'es-es': "Charizard EX",
		'it-it': "Charizard EX",
		'pt-br': "Charizard EX",
		'de-de': "Glurak EX"
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
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
				'es-es': "Ataque Ala",
				'it-it': "Attacco d'Ala",
				'pt-br': "Ataque de Asa",
				'de-de': "Flügelschlag"
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
				'en-us': "Combustion Blast",
				'fr-fr': "Explo-Combustion",
				'es-es': "Estallido Fuego",
				'it-it': "Combustibomba",
				'pt-br': "Explosão de Combustão",
				'de-de': "Brandbombe"
			},
			effect: {
				'en-us': "This Pokémon can't use Combustion Blast during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Explo-Combustion pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Estallido Fuego durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Combustibomba.",
				'pt-br': "Este Pokémon não poderá usar Explosão de Combustão durante sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Brandbombe während deines nächsten Zuges nicht einsetzen."
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
		cardmarket: 281494,
		tcgplayer: 91145
	}
}

export default card
