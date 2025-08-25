import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		fr: "Électhor de Galar V",
		en: "Galarian Zapdos V",
		es: "Zapdos de Galar V",
		it: "Zapdos di Galar V",
		pt: "Zapdos de Galar V",
		de: "Galar-Zapdos V"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Instinct de Combat",
			en: "Fighting Instinct",
			es: "Instinto de Lucha",
			it: "Instinto da Combattente",
			pt: "Instinto de Luta",
			de: "Kampfinstinkt"
		},

		effect: {
			fr: "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon-V en jeu de votre adversaire.",
			en: "This Pokémon's attacks cost Colorless less for each of your opponent's Pokémon V in play.",
			es: "Los ataques de este Pokémon cuestan Colorless menos por cada uno de los Pokémon V en juego de tu rival.",
			it: "Il costo degli attacchi di questo Pokémon è ridotto di Colorless per ogni Pokémon-V in gioco del tuo avversario.",
			pt: "Os ataques deste Pokémon custam Colorless a menos para cada Pokémon V do seu oponente em jogo.",
			de: "Die Kosten der Attacken dieses Pokémon verringern sich für jedes Pokémon-V deines Gegners im Spiel um Colorless."
		}
	}],

	attacks: [{
		name: {
			fr: "Coup Fulgurant",
			en: "Thunderous Kick",
			es: "Patada Relámpago",
			it: "Calcio Tonante",
			pt: "Chute Trovejante",
			de: "Donnernder Tritt"
		},

		effect: {
			fr: "Avant d'infliger des dégâts, défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			en: "Before doing damage, discard a Special Energy from your opponent's Active Pokémon.",
			es: "Antes de infligir daño, descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			it: "Prima di infliggere danni, scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			pt: "Antes de causar dano, descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			de: "Bevor du Schaden zufügst, lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 567188,
		tcgplayer: 241747
	}
}

export default card
