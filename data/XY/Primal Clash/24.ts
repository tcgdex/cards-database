import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		es: "Magcargo",
		it: "Magcargo",
		pt: "Magcargo",
		de: "Magcargo"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},
	stage: "Stage1",

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
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Indomitable Blaze",
				fr: "Brasier Indomptable",
				es: "Fuego Indomable",
				it: "Fiamma Indomita",
				pt: "Labareda Indomável",
				de: "Unbezwingbare Feuersbrunst"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, esse ataque causará 60 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
