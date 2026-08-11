import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'es-es': "Hypno",
		'it-it': "Hypno",
		'pt-br': "Hypno",
		'de-de': "Hypno"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Goodnight, Babies",
				'fr-fr': "Bonne Nuit Mes Petits",
				'es-es': "Buenas Noches, Chicos",
				'it-it': "Notte, ragazzi",
				'pt-br': "Bons sonhos, Crianças",
				'de-de': "Schlaf, Kindlein, schlaf!"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may leave both Active Pokémon Asleep.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez laisser les deux Pokémon Actifs Endormis.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes dejar a ambos Pokémon Activos Dormidos.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lasciare entrambi i Pokémon attivi addormentati.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode deixar ambos os Pokémon Ativos Adormecidos.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du beide Aktiven Pokémon schlafen lassen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Zen Headbutt",
				'fr-fr': "Psykoud'Boul",
				'es-es': "Cabezazo Zen",
				'it-it': "Cozzata Zen",
				'pt-br': "Cabeçada Zen",
				'de-de': "Zen-Kopfstoß"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Seeing its swinging pendulum can induce sleep in three seconds, even in someone who just woke up.",
	},

	thirdParty: {
		cardmarket: 288226,
		tcgplayer: 111593
	}
}

export default card
