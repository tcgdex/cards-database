import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Tag Team Spark",
				'fr-fr': "Étincelle Groupée",
				'es-es': "Chispa en Equipo",
				'it-it': "Scintillasquadra",
				'pt-br': "Faísca de Impulso",
				'de-de': "Tag-Team-Funken"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Energy attached to your Magmortar.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à vos Maganon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida a tus Magmortar.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai tuoi Magmortar.",
				'pt-br': "Esse ataque causa 20 de danos adicionais para cada Energia ligada a seu Magmortar.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte für jede Energie zu, die an deine Magbrant angelegt sind."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gigavolt",
				'fr-fr': "Gigavolt",
				'es-es': "Gigavoltio",
				'it-it': "Gigavolt",
				'pt-br': "Gigavolt",
				'de-de': "Gigavolt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più. Se esce croce, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais. Se sair coroa, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: "60+",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "As its electric charge amplifies, blue sparks begin to crackle between its horns.",
	},

	thirdParty: {
		cardmarket: 281694,
		tcgplayer: 92205
	}
}

export default card
