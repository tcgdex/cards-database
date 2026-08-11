import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Haxorus",
		'fr-fr': "Tranchodon",
		'es-es': "Haxorus",
		'it-it': "Haxorus",
		'pt-br': "Haxorus",
		'de-de': "Maxax"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'es-es': "Fraxure",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'de-de': "Sharfax"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dragon Dance",
				'fr-fr': "Danse Draco",
				'es-es': "Danza Dragón",
				'it-it': "Dragodanza",
				'pt-br': "Dança do Dragão",
				'de-de': "Drachentanz"
			},
			effect: {
				'en-us': "As long as this Haxorus is your Active Pokémon, each of its attacks does 100 more damage (before applying Weakness and Resistance). You can't add more than 100 damage in this way.",
				'fr-fr': "Tant que ce Tranchodon est votre Pokémon Actif, chacune de ses attaques inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
				'es-es': "Mientras este Haxorus sea tu Pokémon Activo, cada uno de sus ataques hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia). No puedes añadir más de 100 puntos de daño de esta manera.",
				'it-it': "Fintanto che questo Haxorus è il tuo Pokémon attivo, ciascuno dei suoi attacchi infligge 100 danni in più, prima di aver applicato debolezza e resistenza. Non puoi aggiungere più di 100 danni in questo modo.",
				'pt-br': "Enquanto este Haxorus for seu Pokémon Ativo, cada um do seus ataques causará 100 de danos adicionais (antes da aplicação de Fraqueza e Resistência). Você não pode adicionar mais de 100 danos desta forma.",
				'de-de': "Solang Maxax dein Aktives Pokémon ist, fügt jeder seiner Angriffe 100 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden). Du kannst so nicht mehr als 100 Schadenspunkte hinzufügen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc Aiguisé",
				'es-es': "Colmillo Afilado",
				'it-it': "Zannaffilata",
				'pt-br': "Presa Afiada",
				'de-de': "Scharfe Fänge"
			},

			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc",
				'es-es': "Pulso Dragón",
				'it-it': "Dragopulsar",
				'pt-br': "Pulso do Dragão",
				'de-de': "Drachenpuls"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
				'es-es': "Descarta las 3 primeras cartas de tu baraja.",
				'it-it': "Scarta le prime tre carte del tuo mazzo.",
				'pt-br': "Descarte os 3 cards de cima do seu baralho.",
				'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.",
	},

	thirdParty: {
		cardmarket: 286357,
		tcgplayer: 107230
	}
}

export default card
