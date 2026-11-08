import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [844],
	set: Set,

	name: {
		'en-us': "Sandaconda",
		'fr-fr': "Dunaconda",
		'es-es': "Sandaconda",
		'it-it': "Sandaconda",
		'pt-br': "Sandaconda",
		'de-de': "Sanaconda"
	},

	illustrator: "hatachu",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Silicobra",
		'fr-fr': "Dunaja",
		'es-es': "Silicobra",
		'it-it': "Silicobra",
		'pt-br': "Silicobra",
		'de-de': "Salanga"
	},

	attacks: [{
		name: {
			'en-us': "Big Sand Cannon",
			'fr-fr': "Gros Canon Sableux",
			'es-es': "Cañonazo de Arena",
			'it-it': "Grancannone di Sabbia",
			'pt-br': "Grande Canhão de Areia",
			'de-de': "Große Sandkanone"
		},

		effect: {
			'en-us': "Discard the top 6 cards of your deck. This attack does 60 damage for each Fighting Energy card you discarded in this way.",
			'fr-fr': "Défaussez les 6 cartes du dessus de votre deck. Cette attaque inflige 60 dégâts pour chaque carte Énergie Fighting défaussée de cette façon.",
			'es-es': "Descarta las 6 primeras cartas de tu baraja. Este ataque hace 60 puntos de daño por cada carta de Energía Fighting que hayas descartado de esta manera.",
			'it-it': "Scarta le prime sei carte del tuo mazzo. Questo attacco infligge 60 danni per ogni carta Energia Fighting che hai scartato in questo modo.",
			'pt-br': "Descarte as 6 cartas de cima do seu baralho. Este ataque causa 60 pontos de dano para cada carta de Energia Fighting descartada desta forma.",
			'de-de': "Lege die obersten 6 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Fighting-Energiekarte 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Skull Bash",
			'fr-fr': "Coud'Krâne",
			'es-es': "Cabezazo",
			'it-it': "Capocciata",
			'pt-br': "Quebra-crânio",
			'de-de': "Schädelwumme"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Its unique style of coiling allows it to blast sand out of its sand sac more efficiently."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545521,
				tcgplayer: 234259
			}
		},
		{
			type: 'holo',
			stamp: ['gamestop'],
			thirdParty: {
				cardmarket: 569897
			}
		},
		{
			type: 'holo',
			stamp: ['eb-games'],
			thirdParty: {
				cardmarket: 569898
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 883789
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545521,
				tcgplayer: 234259
			}
		},
	],
}

export default card
