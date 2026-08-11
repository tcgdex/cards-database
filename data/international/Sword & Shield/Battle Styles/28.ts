import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [758],
	set: Set,

	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},

	attacks: [{
		name: {
			'en-us': "Perplex",
			'fr-fr': "Affolement",
			'es-es': "Desconcierto",
			'it-it': "Sconcerto",
			'pt-br': "Perplexo",
			'de-de': "Perplex"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		cost: ["Fire"]
	}, {
		name: {
			'en-us': "Derisive Roasting",
			'fr-fr': "Raillerie Roussie",
			'es-es': "Escarnio Abrasador",
			'it-it': "Scherno Rovente",
			'pt-br': "Calcinação Sarcástica",
			'de-de': "Höhnisches Rösten"
		},

		effect: {
			'en-us': "This attack does 90 damage for each Special Condition affecting your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 90 dégâts pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 90 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 90 danni per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 90 pontos de dano para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jeden Speziellen Zustand, von dem das Aktive Pokémon deines Gegners betroffen ist, 90 Schadenspunkte zu."
		},

		damage: "90×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "The winner of competitions between Salazzle is decided by which one has the most male Salandit with it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545046,
				tcgplayer: 234133
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545046,
				tcgplayer: 234133
			}
		},
	],
}

export default card
