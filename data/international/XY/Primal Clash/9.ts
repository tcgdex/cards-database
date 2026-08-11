import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Sceptile",
		'fr-fr': "Jungko",
		'es-es': "Sceptile",
		'it-it': "Sceptile",
		'pt-br': "Sceptile",
		'de-de': "Gewaldro"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'es-es': "Grovyle",
		'it-it': "Grovyle",
		'pt-br': "Grovyle",
		'de-de': "Reptain"
	},

	stage: "Stage2",

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
				"Grass",
			],
			name: {
				'en-us': "Leaf Blade",
				'fr-fr': "Lame-Feuille",
				'es-es': "Hoja Aguda",
				'it-it': "Fendifoglia",
				'pt-br': "Lâmina de Folha",
				'de-de': "Laubklinge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Power Poison",
				'fr-fr': "Poison Puissant",
				'es-es': "Veneno Poderoso",
				'it-it': "Veleno Potente",
				'pt-br': "Veneno Poderoso",
				'de-de': "Starkes Gift"
			},
			effect: {
				'en-us': "Discard 1 Energy attached to this Pokémon. Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Descarta 1 Energía unida a este Pokémon. El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon. Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon. O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It agilely leaps about the jungle and uses the sharp leaves on its arms to strike its prey.",
	},

	thirdParty: {
		cardmarket: 273539,
		tcgplayer: 95893
	}
}

export default card
