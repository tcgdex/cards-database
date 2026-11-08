import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Darkrai EX",
		'fr-fr': "Darkrai EX",
		'es-es': "Darkrai EX",
		'it-it': "Darkrai EX",
		'pt-br': "Darkrai EX",
		'de-de': "Darkrai EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 180,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Pulse",
				'fr-fr': "Vibrobscur",
				'es-es': "Pulso Umbrío",
				'it-it': "Neropulsar",
				'pt-br': "Pulso Sombrio",
				'de-de': "Finsteraura"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Darkness Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Darkness unida a todos tus Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Darkness assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 20 de danos adicionais para cada Energia Darkness ligada a todos os seus Pokémon.",
				'de-de': "Dieser Angriff fügt für jede Darkness-Energie, die an deine Pokémon angelegt sind, 20 weitere Schadenpunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Head",
				'fr-fr': "Tête Obscure",
				'es-es': "Cabeza Oscura",
				'it-it': "Testa Oscura",
				'pt-br': "Cabeça Sombria",
				'de-de': "Düsterer Kopf"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is Asleep, this attack does 80 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Dormido, este ataque hace 80 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è addormentato, questo attacco infligge 80 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Adormecido, este ataque causará 80 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners schläft, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

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

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 288293,
		tcgplayer: 111562
	}
}

export default card
