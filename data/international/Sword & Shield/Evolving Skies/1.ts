import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'es-es': "Pinsir",
		'it-it': "Pinsir",
		'pt-br': "Pinsir",
		'de-de': "Pinsir"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Shin Nagasawa",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Vise Coach",
			'fr-fr': "Étau Entraîné",
			'es-es': "Entrenador Pinza",
			'it-it': "Stretta Magistrale",
			'pt-br': "Vise Coach",
			'de-de': "Klammertrainer"
		},

		effect: {
			'en-us': "Damage from your Single Strike Pokémon's attacks isn't affected by your opponent's Active Pokémon's Resistance.",
			'fr-fr': "Les dégâts des attaques de vos Pokémon Poing Final ne sont pas affectés par la Résistance du Pokémon Actif de votre adversaire.",
			'es-es': "El daño de los ataques de tus Pokémon Golpe Brusco no se ve afectado por la Resistencia del Pokémon Activo de tu rival.",
			'it-it': "I danni degli attacchi dei tuoi Pokémon Colpo Singolo non sono influenzati dalla resistenza del Pokémon attivo del tuo avversario.",
			'pt-br': "Damage from your Single Strike Pokémon's attacks isn't affected by your opponent's Active Pokémon's Resistance.",
			'de-de': "Schaden durch Attacken deiner Fokussierter-Angriff-Pokémon wird durch Resistenz auf dem Aktiven Pokémon deines Gegners nicht verändert."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Seismic Toss",
			'fr-fr': "Frappe Atlas",
			'es-es': "Sísmico",
			'it-it': "Movimento Sismico",
			'pt-br': "Seismic Toss",
			'de-de': "Geowurf"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "Although it's tough, it can't handle cold well. When night falls, it buries itself in leafage and sleeps."
	},

	dexId: [127],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574025,
				tcgplayer: 246813
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574025,
				tcgplayer: 246813
			}
		},
	],
}

export default card
