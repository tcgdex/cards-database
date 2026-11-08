import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Goodra",
		'fr-fr': "Muplodocus",
		'es-es': "Goodra",
		'it-it': "Goodra",
		'pt-br': "Goodra",
		'de-de': "Viscogon"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		706,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Sliggoo",
		'fr-fr': "Colimucus",
		'es-es': "Sliggoo",
		'it-it': "Sliggoo",
		'pt-br': "Sliggoo",
		'de-de': "Viscargot"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gooey Regeneration",
				'fr-fr': "Régénération Visqueuse",
				'es-es': "Regeneración Pegajosa",
				'it-it': "Viscogenerazione",
				'pt-br': "Regeneração Pegajosa",
				'de-de': "Viskositätsauffrischung"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may discard an Energy attached to this Pokémon. If you do, heal 60 damage from this Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, soignez 60 dégâts à ce Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes descartar 1 Energía unida a este Pokémon. Si lo haces, cura 60 puntos de daño a este Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi scartare un'Energia assegnata a questo Pokémon tutte le volte che vuoi. Se lo fai, cura questo Pokémon da 60 danni.",
				'pt-br': "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você poderá descartar uma Energia ligada a este Pokémon. Se fizer isso, cure 60 de danos deste Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel legen. Wenn du das machst, heile 60 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Whip",
				'fr-fr': "Choc-Fouet",
				'es-es': "Látigo Potente",
				'it-it': "Fortefrusta",
				'pt-br': "Chicote Pesado",
				'de-de': "Kräftiger Hieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

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
		'en-us': "This very friendly Dragon-type Pokémon will hug its beloved Trainer, leaving that Trainer covered in sticky slime.",
	},

	thirdParty: {
		cardmarket: 281557,
		tcgplayer: 91211
	}
}

export default card
