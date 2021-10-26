import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Galarian Zapdos V",
		fr: "Électhor de Galar V",
		es: "Zapdos de Galar V",
		it: "Zapdos di Galar V",
		pt: "Zapdos de Galar V",
		de: "Galar-Zapdos V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
			en: "Fighting Instinct",
			fr: "Instinct de Combat",
			es: "Instinto de Lucha",
			it: "Instinto da Combattente",
			pt: "Instinto de Luta",
			de: "Kampfinstinkt"
		},
		effect: {
			en: "This Pokémon's attacks cost Colorless less for each of your opponent's Pokémon V in play.",
			fr: "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon-V en jeu de votre adversaire.",
			es: "Los ataques de este Pokémon cuestan Colorless menos por cada uno de los Pokémon V en juego de tu rival.",
			it: "Il costo degli attacchi di questo Pokémon è ridotto di Colorless per ogni Pokémon-V in gioco del tuo avversario.",
			pt: "Os ataques deste Pokémon custam Colorless a menos para cada Pokémon V do seu oponente em jogo.",
			de: "Die Kosten der Attacken dieses Pokémon verringern sich für jedes Pokémon-V deines Gegners im Spiel um Colorless."
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
				en: "Thunderous Kick",
				fr: "Coup Fulgurant",
				es: "Patada Relámpago",
				it: "Calcio Tonante",
				pt: "Chute Trovejante",
				de: "Donnernder Tritt"
			},
			effect: {
				en: "Before doing damage, discard a Special Energy from your opponent's Active Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				es: "Antes de infligir daño, descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Prima di infliggere danni, scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
				pt: "Antes de causar dano, descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Bevor du Schaden zufügst, lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
