import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Marshadow",
		fr: "Marshadow",
		es: "Marshadow",
		it: "Marshadow",
		pt: "Marshadow",
		de: "Marshadow"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yuya Oka",

	attacks: [{
		name: {
			en: "Rapid Hunt",
			fr: "Chasse Rapide",
			es: "Caza Fluida",
			it: "Agguato Rapido",
			pt: "Rapid Hunt",
			de: "Fließende Jagd"
		},

		effect: {
			en: "Search your deck for up to 2 Rapid Strike cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Mille Poings, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Golpe Fluido, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Colpo Rapido, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Search your deck for up to 2 Rapid Strike cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Fließender-Angriff-Karten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Shadow Flicker",
			fr: "Ombre Vacillante",
			es: "Sombra Titilante",
			it: "Tremulombra",
			pt: "Shadow Flicker",
			de: "Schattenflackern"
		},

		effect: {
			en: "If the Defending Pokémon is Knocked Out during your next turn, take 1 more Prize card.",
			fr: "Si le Pokémon Défenseur est mis K.O. pendant votre prochain tour, récupérez une carte Récompense supplémentaire.",
			es: "Si el Pokémon Defensor queda Fuera de Combate durante tu próximo turno, coge 1 carta de Premio más.",
			it: "Se il Pokémon difensore viene messo KO durante il tuo prossimo turno, prendi una carta Premio in più.",
			pt: "If the Defending Pokémon is Knocked Out during your next turn, take 1 more Prize card.",
			de: "Wenn das Verteidigende Pokémon während deines nächsten Zuges kampfunfähig wird, nimm 1 Preiskarte mehr."
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
		en: "It sinks into the shadows of people and Pokémon, where it can understand their feelings and copy their capabilities."
	},

	dexId: [802],
	regulationMark: "E"
}

export default card
