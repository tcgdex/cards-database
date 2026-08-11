import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [805],
	set: Set,

	name: {
		'en-us': "Stakataka",
		'fr-fr': "Ama-Ama",
		'es-es': "Stakataka",
		'it-it': "Stakataka",
		'pt-br': "Stakataka",
		'de-de': "Muramura"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Wall of Stone",
			'fr-fr': "Mur de Pierres",
			'es-es': "Muro de Piedra",
			'it-it': "Muropietra",
			'pt-br': "Muralha de Pedra",
			'de-de': "Steinmauer"
		},

		effect: {
			'en-us': "If your opponent has 3 or fewer Prize cards remaining, this Pokémon’s maximum HP is 200.",
			'fr-fr': "S’il reste 3 cartes Récompense ou moins à votre adversaire, les PV maximum de ce Pokémon sont de 200.",
			'es-es': "Si a tu rival le quedan 3 o menos cartas de Premio, los PS máximos de este Pokémon son 200.",
			'it-it': "Se il tuo avversario ha tre o meno carte Premio rimanenti, i PS massimi di questo Pokémon diventano 200.",
			'pt-br': "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, o PS máximo deste Pokémon será 200.",
			'de-de': "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, betragen die maximalen KP dieses Pokémon 200."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Top Down",
			'fr-fr': "Écras’Montagne",
			'es-es': "Escalada",
			'it-it': "Scalata",
			'pt-br': "De Cima para Baixo",
			'de-de': "Kopfüber"
		},

		damage: 110,

		effect: {
			'en-us': "Flip a coin until you get tails. For each heads, discard the top card of your opponent’s deck.",
			'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Jogue 1 moeda até sair coroa. Para cada cara, descarte a primeira carta do baralho do seu oponente.",
			'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Lege pro Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	description: {
		'en-us': "It appeared from an Ultra Wormhole. Each one appears to be made up of many life-forms stacked one on top of each other.",
	},
}

export default card
