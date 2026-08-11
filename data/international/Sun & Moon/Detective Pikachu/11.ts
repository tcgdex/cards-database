import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'es-es': "Mr. Mime",
		'it-it': "Mr. Mime",
		'pt-br': "Mr. Mime",
		'de-de': "Pantimos"
	},

	illustrator: "MPC Film",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Pantomime",
				'fr-fr': "Pantomime",
				'es-es': "Pantomima",
				'it-it': "Pantomima",
				'pt-br': "Pantomima",
				'de-de': "Pantomime"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may switch 1 of your face-down Prize cards with the top card of your deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez échanger une de vos cartes Récompense (actuellement face cachée) avec la carte du dessus de votre deck.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes cambiar 1 de tus cartas de Premio que están boca abajo por la primera carta de tu baraja.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scambiare una delle tue carte Premio coperte con la prima carta del tuo mazzo.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode trocar 1 das suas cartas de Prêmio viradas para baixo pela primeira carta do seu baralho.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 deiner verdeckten Preiskarten gegen die oberste Karte deines Decks austauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Juggling",
				'fr-fr': "Jonglerie",
				'es-es': "Malabarismo",
				'it-it': "Giocoleria",
				'pt-br': "Malabarismo",
				'de-de': "Jongleur"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.",
	},

	thirdParty: {
		cardmarket: 370628,
		tcgplayer: 186019
	}
}

export default card
