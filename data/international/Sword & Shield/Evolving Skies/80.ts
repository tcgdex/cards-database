import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Marshadow",
		'fr-fr': "Marshadow",
		'es-es': "Marshadow",
		'it-it': "Marshadow",
		'pt-br': "Marshadow",
		'de-de': "Marshadow"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yuya Oka",

	attacks: [{
		name: {
			'en-us': "Rapid Hunt",
			'fr-fr': "Chasse Rapide",
			'es-es': "Caza Fluida",
			'it-it': "Agguato Rapido",
			'pt-br': "Rapid Hunt",
			'de-de': "Fließende Jagd"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Rapid Strike cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Mille Poings, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Golpe Fluido, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Colpo Rapido, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Search your deck for up to 2 Rapid Strike cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Fließender-Angriff-Karten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Shadow Flicker",
			'fr-fr': "Ombre Vacillante",
			'es-es': "Sombra Titilante",
			'it-it': "Tremulombra",
			'pt-br': "Shadow Flicker",
			'de-de': "Schattenflackern"
		},

		effect: {
			'en-us': "If the Defending Pokémon is Knocked Out during your next turn, take 1 more Prize card.",
			'fr-fr': "Si le Pokémon Défenseur est mis K.O. pendant votre prochain tour, récupérez une carte Récompense supplémentaire.",
			'es-es': "Si el Pokémon Defensor queda Fuera de Combate durante tu próximo turno, coge 1 carta de Premio más.",
			'it-it': "Se il Pokémon difensore viene messo KO durante il tuo prossimo turno, prendi una carta Premio in più.",
			'pt-br': "If the Defending Pokémon is Knocked Out during your next turn, take 1 more Prize card.",
			'de-de': "Wenn das Verteidigende Pokémon während deines nächsten Zuges kampfunfähig wird, nimm 1 Preiskarte mehr."
		},

		damage: 10,
		cost: ["Colorless"]
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

	description: {
		'en-us': "It sinks into the shadows of people and Pokémon, where it can understand their feelings and copy their capabilities."
	},

	dexId: [802],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574128,
				tcgplayer: 246866
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574128,
				tcgplayer: 246866
			}
		},
	],
}

export default card
