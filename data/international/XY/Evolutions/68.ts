import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Farfetch'd",
		'fr-fr': "Canarticho",
		'es-es': "Farfetch'd",
		'it-it': "Farfetch'd",
		'pt-br': "Farfetch'd",
		'de-de': "Porenta"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		83,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leek Slap",
				'fr-fr': "Coup d'oignon",
				'es-es': "Bofetada de Puerro",
				'it-it': "Porrosberla",
				'pt-br': "Golpe Alho Poró",
				'de-de': "Lauchschlag"
			},
			effect: {
				'en-us': "This Pokémon can't use Leek Slap during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Coup d'Oignon pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Bofetada de Puerro durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Porrosberla.",
				'pt-br': "Este Pokémon não poderá usar Golpe Alho Poró na sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Lauchschlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pot Smash",
				'fr-fr': "Coup de Casserole",
				'es-es': "Aplaste de Olla",
				'it-it': "Spaccavasi",
				'pt-br': "Esmagador de Panela",
				'de-de': "Topfschmetterer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It always walks about with a plant stalk clamped in its beak. The stalk is used for building its nest.",
	},

	thirdParty: {
		cardmarket: 293440,
		tcgplayer: 124081
	}
}

export default card
