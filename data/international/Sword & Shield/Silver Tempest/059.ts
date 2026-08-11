import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [65],
	set: Set,

	name: {
		'en-us': "Radiant Alakazam",
		'fr-fr': "Alakazam Radieux",
		'es-es': "Alakazam Radiante",
		'it-it': "Alakazam Lucente",
		'pt-br': "Alakazam Radiante",
		'de-de': "Strahlendes Simsala"
	},

	illustrator: "Akira Komayama",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Painful Spoons",
			'fr-fr': "Cuillères Douloureuses",
			'es-es': "Cucharas Dolorosas",
			'it-it': "Cucchiai Funesti",
			'pt-br': "Colheres Dolorosas",
			'de-de': "Schmerzhafte Löffel"
		},

		effect: {
			'en-us': "Once during your turn, you may move up to 2 damage counters from 1 of your opponent's Pokémon to another of their Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez déplacer jusqu'à 2 marqueurs de dégâts de l'un des Pokémon de l'adversaire vers un autre de ses Pokémon.",
			'es-es': "Una vez durante tu turno, puedes mover hasta 2 contadores de daño de 1 de los Pokémon de tu rival a otro de sus Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi spostare fino a due segnalini danno da uno dei Pokémon del tuo avversario a un altro dei suoi Pokémon.",
			'pt-br': "Uma vez durante o seu turno, você poderá mover até 2 contadores de dano de 1 dos Pokémon do seu oponente para outro Pokémon dele(a).",
			'de-de': "Einmal während deines Zuges kannst du bis zu 2 Schadensmarken von 1 Pokémon deines Gegners auf 1 anderes seiner Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Mind Ruler",
			'fr-fr': "Contrôle Mental",
			'es-es': "Jefe Mental",
			'it-it': "Signore della Mente",
			'pt-br': "Comando Mental",
			'de-de': "Gedankenherrscher"
		},

		effect: {
			'en-us': "This attack does 20 damage for each card in your opponent's hand.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte dans la main de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival.",
			'it-it': "Questo attacco infligge 20 danni per ogni carta nella mano del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada carta na mão do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682106,
				tcgplayer: 451394
			}
		},
	],
}

export default card
