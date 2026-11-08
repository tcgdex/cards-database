import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'de-de': "Tragosso"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'es-es': "Foco Energía",
				'it-it': "Focalenergia",
				'pt-br': "Focalizar Energia",
				'de-de': "Energiefokus"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Beat attack’s base damage is 80.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l’attaque Bataille de ce Pokémon sont de 80.",
				'es-es': "Durante tu próximo turno, el daño básico del ataque Toque de este Pokémon es de 80.",
				'it-it': "Durante il tuo prossimo turno, i danni base dell’attacco Battuta di questo Pokémon sono 80.",
				'pt-br': "Durante a sua próxima vez de jogar, o dano base do ataque Pulso deste Pokémon será 80.",
				'de-de': "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Verprügler dieses Pokémon 80 Schadenspunkte."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'es-es': "Toque",
				'it-it': "Battuta",
				'pt-br': "Pulso",
				'de-de': "Verprügler"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "At night, it weeps loudly for its dead mother, but those cries only attract its natural enemy—Mandibuzz.",
	},

	thirdParty: {
		cardmarket: 372381,
		tcgplayer: 189189
	}
}

export default card
