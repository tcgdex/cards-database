import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'it-it': "Dusclops",
		'pt-br': "Dusclops",
		'de-de': "Zwirrklop"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
		'es-es': "Duskull",
		'it-it': "Duskull",
		'pt-br': "Duskull",
		'de-de': "Zwirrlicht"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde Folie",
				'es-es': "Rayo Confuso",
				'it-it': "Stordiraggio",
				'pt-br': "Raio da Confusão",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cursed Drop",
				'fr-fr': "Chute Maudite",
				'es-es': "Caída Maldita",
				'it-it': "Caduta Maledetta",
				'pt-br': "Queda Amaldiçoada",
				'de-de': "Verfluchter Fall"
			},
			effect: {
				'en-us': "Put 4 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Coloque 4 contadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				'de-de': "Verteile 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Anyone who dares peer into its body to see its spectral ball of fire will have their spirit stolen away.",
	},

	thirdParty: {
		cardmarket: 281522,
		tcgplayer: 91172
	}
}

export default card
