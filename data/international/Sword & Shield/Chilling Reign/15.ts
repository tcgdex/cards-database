import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [763],
	set: Set,

	name: {
		'en-us': "Tsareena",
		'fr-fr': "Sucreine",
		'es-es': "Tsareena",
		'it-it': "Tsareena",
		'pt-br': "Tsareena",
		'de-de': "Fruyal"
	},

	illustrator: "Yuu Nishida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Steenee",
		'fr-fr': "Candine",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'pt-br': "Steenee",
		'de-de': "Frubaila"
	},

	attacks: [{
		name: {
			'en-us': "Tread On",
			'fr-fr': "Piétinement",
			'es-es': "Patear",
			'it-it': "Calpestare",
			'pt-br': "Pisão",
			'de-de': "Zertreten"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'de-de': "Solarstrahl"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "A kick from the hardened tips of this Pokémon's legs leaves a wound in the opponent's body and soul that will never heal."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567095,
				tcgplayer: 241664
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567095,
				tcgplayer: 241664
			}
		},
	],
}

export default card
