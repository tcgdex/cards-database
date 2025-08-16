import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Alakazam V",
		fr: "Alakazam V",
		es: "Alakazam V",
		it: "Alakazam V",
		pt: "Alakazam V",
		de: "Simsala V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Zen Spoon",
			fr: "Cuillère Zen",
			es: "Cuchara Zen",
			it: "Cucchiaio Zen",
			pt: "Colher Zen",
			de: "Zen-Löffel"
		},

		effect: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			es: "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Metti tre segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
			de: "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Mind Ruler",
			fr: "Contrôle Mental",
			es: "Jefe Mental",
			it: "Signore della Mente",
			pt: "Comando Mental",
			de: "Gedankenherrscher"
		},

		effect: {
			en: "This attack does 30 damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte dans la main de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño por cada carta en la mano de tu rival.",
			it: "Questo attacco infligge 30 danni per ogni carta nella mano del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano para cada carta na mão do seu oponente.",
			de: "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 30 Schadenspunkte zu."
		},

		damage: "30×",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	stage: "Basic",
	dexId: [65],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 530482
	}
}

export default card
