import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		pt: "Mr. Mime",
		de: "Pantimos"
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
				en: "Pantomime",
				fr: "Pantomime",
				es: "Pantomima",
				it: "Pantomima",
				pt: "Pantomima",
				de: "Pantomime"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may switch 1 of your face-down Prize cards with the top card of your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez échanger une de vos cartes Récompense (actuellement face cachée) avec la carte du dessus de votre deck.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes cambiar 1 de tus cartas de Premio que están boca abajo por la primera carta de tu baraja.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scambiare una delle tue carte Premio coperte con la prima carta del tuo mazzo.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode trocar 1 das suas cartas de Prêmio viradas para baixo pela primeira carta do seu baralho.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 deiner verdeckten Preiskarten gegen die oberste Karte deines Decks austauschen."
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
				en: "Juggling",
				fr: "Jonglerie",
				es: "Malabarismo",
				it: "Giocoleria",
				pt: "Malabarismo",
				de: "Jongleur"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
				es: "Lanza 4 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
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



}

export default card
