import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Primal Groudon EX",
		fr: "Primo-Groudon EX",
		es: "Groudon Primigenio EX",
		it: "Archeo Groudon EX",
		pt: "Groudon Primitivo EX",
		de: "Proto-Groudon EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 240,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Groudon-EX",
		fr: "Groudon-EX",
		es: "Groudon-EX",
		it: "Groudon-EX",
		pt: "Groudon-EX",
		de: "Groudon-EX"
	},

	stage: "MEGA",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Barrière Ω",
				en: "Ω Barrier",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Chaque fois que votre adversaire joue une carte Dresseur (excepté les Outils Pokémon et les cartes Stade), évitez tous les effets de la carte Dresseur sur ce Pokémon.",
				en: "Whenever your opponent plays a Trainer card (excluding Pokémon Tools and Stadium cards), prevent all effects of that card done to this Pokémon.",
				es: "{title}: Cada vez que tu rival juegue 1 carta de Entrenador (excluidas las cartas de Herramienta Pokémon y de Estadio), evita todos los efectos de esa carta infligidos a este Pokémon.",
				it: "{title}: Ogni volta che il tuo avversario gioca una carta Allenatore (escluse le carte Oggetto Pokémon e Stadio), previeni tutti gli effetti di quella carta inflitti a questo Pokémon.",
				pt: "{title}: Sempre que seu oponente jogar um card de Treinador (com excessão dos cards de Ferramenta Pokémon e Estádio), previna todos efeitos daquele card neste Pokémon.",
				de: "{title}: Jedes Mal, wenn dein Gegner 1 Trainerkarte spielt (außer Pokémon-Ausrüstungen und Stadionkarten), verhindere sämtliche Effekte, die diese Karte diesem Pokémon zufügt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Gaia Volcano",
				fr: "Volcan de Gaïa",
				es: "Volcán Gaia",
				it: "Vulcano Gaia",
				pt: "Vulcão Gaia",
				de: "Gaia-Vulkan"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 100 more damage. Discard that Stadium card.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires. Défaussez la carte Stade.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 100 puntos de daño más. Descarta esa carta de Estadio.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 100 danni in più. Scarta quella carta Stadio.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 100 de danos adicionais. Descarte o card de Estádio.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 100 weitere Schadenspunkte zu. Lege diese Stadionkarte auf den Ablagestapel."
			},
			damage: "100+",

		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	suffix: "EX"
}

export default card
