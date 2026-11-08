import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Shedinja",
		'fr-fr': "Munja",
		'es-es': "Shedinja",
		'it-it': "Shedinja",
		'pt-br': "Shedinja",
		'de-de': "Ninjatom"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		292,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nincada",
		'fr-fr': "Ningale",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Empty Shell",
				'fr-fr': "Coquille Vide",
				'es-es': "Concha Vacía",
				'it-it': "Guscio Vuoto",
				'pt-br': "Casca Vazia",
				'de-de': "Leerer Panzer"
			},
			effect: {
				'en-us': "If this Pokémon is Knocked Out, your opponent can’t take any Prize cards for it.",
				'fr-fr': "Si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
				'es-es': "Si este Pokémon queda Fuera de Combate, tu rival no puede coger ninguna carta de Premio por él.",
				'it-it': "Se questo Pokémon viene messo K.O., il tuo avversario non può pescare carte Premio per questo Pokémon.",
				'pt-br': "Se este Pokémon for Nocauteado, seu oponente não poderá receber cards de Prêmio por ele.",
				'de-de': "Wenn dieses Pokémon kampfunfähig wird, darf dein Gegner dafür keine der Preiskarten nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Cursed Drop",
				'fr-fr': "Chute Maudite",
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
			},

		},
	],

	retreat: 0,

	description: {
		'en-us': "A discarded bug shell that came to life. Peering into the crack on its back is said to steal one's spirit.",
	},

	thirdParty: {
		cardmarket: 280487,
		tcgplayer: 89121
	}
}

export default card
