import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar ex",
		fr: "Tyranocif-ex",
		es: "Tyranitar ex",
		pt: "Tyranitar ex",
		it: "Tyranitar-ex",
		de: "Despotar-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Grind",
			fr: "Écrase",
			es: "Moler",
			pt: "Moer",
			it: "Spremuta",
			de: "Zermalmer"
		},

		effect: {
			en: "This attack does 50 damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à ce Pokémon.",
			es: "Este ataque hace 50 puntos de daño por cada Energía unida a este Pokémon.",
			pt: "Este ataque causa 50 pontos de dano para cada Energia ligada a este Pokémon.",
			it: "Questo attacco infligge 50 danni per ogni Energia assegnata a questo Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Tyrannical Crush",
			fr: "Écrasement Tyrannique",
			es: "Destrucción Tiránica",
			pt: "Esmagamento Tirânico",
			it: "Distruzione Tirannica",
			de: "Despotischer Zermalmer"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			pt: "Descarte uma carta aleatória da mão do seu oponente.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 805453
	}
}

export default card