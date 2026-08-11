import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent Glace",
				'es-es': "Viento Hielo",
				'it-it': "Ventogelato",
				'pt-br': "Vento Congelante",
				'de-de': "Eissturm"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Evil Admonition",
				'fr-fr': "Réprimande Maléfique",
				'es-es': "Amonestación Malvada",
				'it-it': "Avvertimento Malvagio",
				'pt-br': "Advertência Maligna",
				'de-de': "Böses Gebot"
			},
			effect: {
				'en-us': "This attack does 50 damage for each of your opponent’s Pokémon that has an Ability.",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Pokémon de votre adversaire ayant un talent.",
				'es-es': "Este ataque hace 50 puntos de daño por cada uno de los Pokémon de tu rival que tenga una habilidad.",
				'it-it': "Questo attacco infligge 50 danni per ogni Pokémon del tuo avversario che abbia un’abilità.",
				'pt-br': "Este ataque causa 50 pontos de dano para cada um dos Pokémon do seu oponente que tiver uma Habilidade.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Pokémon deines Gegners zu, die eine Fähigkeit haben."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They dwell in cold places. This Pokémon's main food source in Alola is Vulpix and Sandshrew, which they carefully divide among their group.",
	},

	thirdParty: {
		cardmarket: 316002,
		tcgplayer: 157691
	}
}

export default card
