import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alakazam V",
		'fr-fr': "Alakazam V",
		'es-es': "Alakazam V",
		'it-it': "Alakazam V",
		'pt-br': "Alakazam V",
		'de-de': "Simsala V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Zen Spoon",
			'fr-fr': "Cuillère Zen",
			'es-es': "Cuchara Zen",
			'it-it': "Cucchiaio Zen",
			'pt-br': "Colher Zen",
			'de-de': "Zen-Löffel"
		},

		effect: {
			'en-us': "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'es-es': "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'it-it': "Metti tre segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
			'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Mind Ruler",
			'fr-fr': "Contrôle Mental",
			'es-es': "Jefe Mental",
			'it-it': "Signore della Mente",
			'pt-br': "Comando Mental",
			'de-de': "Gedankenherrscher"
		},

		effect: {
			'en-us': "This attack does 30 damage for each card in your opponent's hand.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte dans la main de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño por cada carta en la mano de tu rival.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta nella mano del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada carta na mão do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 30 Schadenspunkte zu."
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
