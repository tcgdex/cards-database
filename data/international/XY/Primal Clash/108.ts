import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Kingdra",
		'fr-fr': "Hyporoi",
		'es-es': "Kingdra",
		'it-it': "Kingdra",
		'pt-br': "Kingdra",
		'de-de': "Seedraking"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'es-es': "Seadra",
		'it-it': "Seadra",
		'pt-br': "Seadra",
		'de-de': "Seemon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Croissance α",
				'en-us': "α Growth",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
				'en-us': "When you attach an Energy card from your hand to this Pokémon (except with an attack, Ability, or Trainer card), you may attach 2 Energy cards.",
				'es-es': "{title}: Cuando unas 1 carta de Energía de tu mano a este Pokémon (excepto con un ataque, habilidad o carta de Entrenador), puedes unir 2 cartas de Energía en vez de 1.",
				'it-it': "{title}: Quando assegni una carta Energia a questo Pokémon dalla tua mano (a meno che non sia in conseguenza di un attacco, un'abilità o una carta Allenatore), puoi assegnare due carte Energia.",
				'pt-br': "{title}: Quando você liga um card de Energia de sua mão neste Pokémon (exceto com um ataque, Habilidade ou card de Treinador), você pode ligar 2 cards de Energia.",
				'de-de': "{title}: Wenn du 1 Energiekarte von deiner Hand an dieses Pokémon anlegst (außer auf Anweisung einer Attacke, Fähigkeit oder Trainerkarte), kannst du bis zu 2 Energiekarten anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gather Strength",
				'fr-fr': "Pouvoir Collecté",
				'es-es': "Reunir Fuerzas",
				'it-it': "Radunaforze",
				'pt-br': "Reunir Força",
				'de-de': "Kraftsammler"
			},
			effect: {
				'en-us': "Search your deck for up to 4 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 4 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 4 cartas de Energía Básica, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a quattro carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure no seu baralho até 4 cards de Energia básica, revele-os e coloque-os na mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 4 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Dragon Blast",
				'fr-fr': "Explo-Draco",
				'es-es': "Sacudida Dragón",
				'it-it': "Dragobotto",
				'pt-br': "Explosão do Dragão",
				'de-de': "Drachenbeben"
			},
			effect: {
				'en-us': "Discard a Water Energy and a Lightning Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Water et une Énergie Lightning attachées à ce Pokémon.",
				'es-es': "Descarta 1 Energía Water y 1 Energía Lightning unidas a este Pokémon.",
				'it-it': "Scarta un'Energia Water e un'Energia Lightning assegnate a questo Pokémon.",
				'pt-br': "Descarte uma Energia Water e uma Energia Lightning ligadas a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Water-Energie sowie 1 an dieses Pokémon angelegte Lightning-Energie auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stores energy by sleeping at underwater depths at which no other life-forms can survive.",
	},

	thirdParty: {
		cardmarket: 273638,
		tcgplayer: 96006
	}
}

export default card
