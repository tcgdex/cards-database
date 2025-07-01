import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Nidorina",
		fr: "Nidorina de la Team Rocket",
		de: "Team Rockets Nidorina",
		it: "Nidorina del Team Rocket",
		es: "Nidorina del Team Rocket",
		pt: "Nidorina da Equipe Rocket",
		'es-mx': "Nidorina del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Dark Awakening",
			fr: "Éveil Obscur",
			de: "Dunkles Erwachen",
			it: "Risveglio Oscuro",
			es: "Despertar Oscuro",
			pt: "Despertar Maligno",
			'es-mx': "Despertar Oscuro"
		},

		effect: {
			en: "Choose up to 2 of your {D} Pokémon. For each of those Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Choisissez jusqu'à 2 de vos Pokémon {D}. Pour chacun de ces Pokémon, cherchez dans votre deck une carte Évolution de ce Pokémon-là, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			de: "Wähle bis zu 2 deiner {D}-Pokémon. Durchsuche für jedes jener Pokémon dein Deck nach 1 Karte, die sich aus jenem Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			it: "Scegli fino a due dei tuoi Pokémon {D}. Per ognuno di essi, cerca nel tuo mazzo una carta che si evolve da quel Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			es: "Elige hasta 2 de tus Pokémon {D}. Para cada uno de esos Pokémon, busca en tu baraja 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			pt: "Escolha até 2 dos seus Pokémon {D}. Para cada um daqueles Pokémon, procure por uma carta no seu baralho que evolua daquele Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Elige hasta 2 de tus Pokémon {D}. Por cada uno de esos Pokémon, busca en tu mazo 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			es: "Arañazo",
			pt: "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
