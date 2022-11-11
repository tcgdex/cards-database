import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Alakazam",
		fr: "Alakazam Radieux",
		es: "Alakazam Radiante",
		it: "Alakazam Lucente",
		pt: "Alakazam Radiante",
		de: "Strahlendes Simsala"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Painful Spoons",
			fr: "Cuillères Douloureuses",
			es: "Cucharas Dolorosas",
			it: "Cucchiai Funesti",
			pt: "Colheres Dolorosas",
			de: "Schmerzhafte Löffel"
		},

		effect: {
			en: "Once during your turn, you may move up to 2 damage counters from 1 of your opponent's Pokémon to another of their Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez déplacer jusqu'à 2 marqueurs de dégâts de l'un des Pokémon de l'adversaire vers un autre de ses Pokémon.",
			es: "Una vez durante tu turno, puedes mover hasta 2 contadores de daño de 1 de los Pokémon de tu rival a otro de sus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi spostare fino a due segnalini danno da uno dei Pokémon del tuo avversario a un altro dei suoi Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá mover até 2 contadores de dano de 1 dos Pokémon do seu oponente para outro Pokémon dele(a).",
			de: "Einmal während deines Zuges kannst du bis zu 2 Schadensmarken von 1 Pokémon deines Gegners auf 1 anderes seiner Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Mind Ruler",
			fr: "Contrôle Mental",
			es: "Jefe Mental",
			it: "Signore della Mente",
			pt: "Comando Mental",
			de: "Gedankenherrscher"
		},

		effect: {
			en: "This attack does 20 damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte dans la main de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni carta nella mano del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada carta na mão do seu oponente.",
			de: "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card