import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'es-es': "Abomasnow",
		'it-it': "Abomasnow",
		'pt-br': "Abomasnow",
		'de-de': "Rexblisar"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		460,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Age",
				'fr-fr': "Période Glaciaire",
				'es-es': "Era de Hielo",
				'it-it': "Era Glaciale",
				'pt-br': "Era do Gelo",
				'de-de': "Eiszeitalter"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Dragon Pokémon, it is now Paralyzed.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Dragon, il est maintenant Paralysé.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Dragon, este pasa a estar Paralizado.",
				'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Dragon, viene paralizzato.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Dragon, ele será Paralisado.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Dragon-Pokémon ist, ist es jetzt paralysiert."
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frost Breath",
				'fr-fr': "Souffle Glacé",
				'es-es': "Vaho Gélido",
				'it-it': "Alitogelido",
				'pt-br': "Respiração de Gelo",
				'de-de': "Eisesodem"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
	},

	thirdParty: {
		cardmarket: 286286,
		tcgplayer: 107159
	}
}

export default card
