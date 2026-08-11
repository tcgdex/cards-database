import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		'fr-fr': "Électhor de Galar V",
		'en-us': "Galarian Zapdos V",
		'es-es': "Zapdos de Galar V",
		'it-it': "Zapdos di Galar V",
		'pt-br': "Zapdos de Galar V",
		'de-de': "Galar-Zapdos V"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Instinct de Combat",
			'en-us': "Fighting Instinct",
			'es-es': "Instinto de Lucha",
			'it-it': "Instinto da Combattente",
			'pt-br': "Instinto de Luta",
			'de-de': "Kampfinstinkt"
		},

		effect: {
			'fr-fr': "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon-V en jeu de votre adversaire.",
			'en-us': "This Pokémon's attacks cost Colorless less for each of your opponent's Pokémon V in play.",
			'es-es': "Los ataques de este Pokémon cuestan Colorless menos por cada uno de los Pokémon V en juego de tu rival.",
			'it-it': "Il costo degli attacchi di questo Pokémon è ridotto di Colorless per ogni Pokémon-V in gioco del tuo avversario.",
			'pt-br': "Os ataques deste Pokémon custam Colorless a menos para cada Pokémon V do seu oponente em jogo.",
			'de-de': "Die Kosten der Attacken dieses Pokémon verringern sich für jedes Pokémon-V deines Gegners im Spiel um Colorless."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Coup Fulgurant",
			'en-us': "Thunderous Kick",
			'es-es': "Patada Relámpago",
			'it-it': "Calcio Tonante",
			'pt-br': "Chute Trovejante",
			'de-de': "Donnernder Tritt"
		},

		effect: {
			'fr-fr': "Avant d'infliger des dégâts, défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'en-us': "Before doing damage, discard a Special Energy from your opponent's Active Pokémon.",
			'es-es': "Antes de infligir daño, descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'it-it': "Prima di infliggere danni, scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			'de-de': "Bevor du Schaden zufügst, lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 170,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567282,
				tcgplayer: 241747
			}
		},
	],
}

export default card
