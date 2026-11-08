import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		'en-us': "Galarian Zapdos V",
		'fr-fr': "Électhor de Galar V",
		'es-es': "Zapdos de Galar V",
		'it-it': "Zapdos di Galar V",
		'pt-br': "Zapdos de Galar V",
		'de-de': "Galar-Zapdos V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 200,
	dexId: [145],

	types: [
		"Fighting",
	],

	stage: 'Basic',
	suffix: 'V',

	abilities: [{
		type: "Ability",
		name: {
			'en-us': "Fighting Instinct",
			'fr-fr': "Instinct de Combat",
			'es-es': "Instinto de Lucha",
			'it-it': "Instinto da Combattente",
			'pt-br': "Instinto de Luta",
			'de-de': "Kampfinstinkt"
		},
		effect: {
			'en-us': "This Pokémon's attacks cost Colorless less for each of your opponent's Pokémon V in play.",
			'fr-fr': "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon-V en jeu de votre adversaire.",
			'es-es': "Los ataques de este Pokémon cuestan Colorless menos por cada uno de los Pokémon V en juego de tu rival.",
			'it-it': "Il costo degli attacchi di questo Pokémon è ridotto di Colorless per ogni Pokémon-V in gioco del tuo avversario.",
			'pt-br': "Os ataques deste Pokémon custam Colorless a menos para cada Pokémon V do seu oponente em jogo.",
			'de-de': "Die Kosten der Attacken dieses Pokémon verringern sich für jedes Pokémon-V deines Gegners im Spiel um Colorless."
		}
	}],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			name: {
				'en-us': "Thunderous Kick",
				'fr-fr': "Coup Fulgurant",
				'es-es': "Patada Relámpago",
				'it-it': "Calcio Tonante",
				'pt-br': "Chute Trovejante",
				'de-de': "Donnernder Tritt"
			},
			effect: {
				'en-us': "Before doing damage, discard a Special Energy from your opponent's Active Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				'es-es': "Antes de infligir daño, descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				'it-it': "Prima di infliggere danni, scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
				'pt-br': "Antes de causar dano, descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				'de-de': "Bevor du Schaden zufügst, lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 170
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567188,
				tcgplayer: 241745
			}
		},
	],
}

export default card
