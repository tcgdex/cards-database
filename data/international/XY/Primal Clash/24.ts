import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'es-es': "Magcargo",
		'it-it': "Magcargo",
		'pt-br': "Magcargo",
		'de-de': "Magcargo"
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
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Barrière Ω",
				'en-us': "Ω Barrier",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Chaque fois que votre adversaire joue une carte Dresseur (excepté les Outils Pokémon et les cartes Stade), évitez tous les effets de la carte Dresseur sur ce Pokémon.",
				'en-us': "Whenever your opponent plays a Trainer card (excluding Pokémon Tools and Stadium cards), prevent all effects of that card done to this Pokémon.",
				'es-es': "{title}: Cada vez que tu rival juegue 1 carta de Entrenador (excluidas las cartas de Herramienta Pokémon y de Estadio), evita todos los efectos de esa carta infligidos a este Pokémon.",
				'it-it': "{title}: Ogni volta che il tuo avversario gioca una carta Allenatore (escluse le carte Oggetto Pokémon e Stadio), previeni tutti gli effetti di quella carta inflitti a questo Pokémon.",
				'pt-br': "{title}: Sempre que seu oponente jogar um card de Treinador (com excessão dos cards de Ferramenta Pokémon e Estádio), previna todos efeitos daquele card neste Pokémon.",
				'de-de': "{title}: Jedes Mal, wenn dein Gegner 1 Trainerkarte spielt (außer Pokémon-Ausrüstungen und Stadionkarten), verhindere sämtliche Effekte, die diese Karte diesem Pokémon zufügt."
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
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
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
				'en-us': "Indomitable Blaze",
				'fr-fr': "Brasier Indomptable",
				'es-es': "Fuego Indomable",
				'it-it': "Fiamma Indomita",
				'pt-br': "Labareda Indomável",
				'de-de': "Unbezwingbare Feuersbrunst"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, esse ataque causará 60 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
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

	description: {
		'en-us': "Its body is as hot as lava and is always billowing. Flames will occasionally burst from its shell.",
	},

	thirdParty: {
		cardmarket: 273554,
		tcgplayer: 95908
	}
}

export default card
