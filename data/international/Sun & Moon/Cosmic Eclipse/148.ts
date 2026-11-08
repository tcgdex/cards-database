import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Sneaky Pocket",
				'fr-fr': "Poche Cachée",
				'es-es': "Bolsillo Pillo",
				'it-it': "Intrufolamento Furtivo",
				'pt-br': "Bolso Secreto",
				'de-de': "Gewiefte Tasche"
			},
			effect: {
				'en-us': "Put a card from your hand in the Lost Zone. If you do, draw 3 cards.",
				'fr-fr': "Placez une carte de votre main dans la Zone Perdue. Dans ce cas, piochez 3 cartes.",
				'es-es': "Pon 1 carta de tu mano en la Zona Perdida. Si lo haces, roba 3 cartas.",
				'it-it': "Prendi una carta che hai in mano e mettila nell’area perduta. Se lo fai, pesca tre carte.",
				'pt-br': "Coloque 1 carta da sua mão na Zona Perdida. Se fizer isto, compre 3 cartas.",
				'de-de': "Lege 1 Karte aus deiner Hand ins Nirgendwo. Wenn du das machst, ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lost March",
				'fr-fr': "Marche Perdue",
				'es-es': "Marcha Perdida",
				'it-it': "Marcia Perduta",
				'pt-br': "Marcha Perdida",
				'de-de': "Nirgendwo-Marsch"
			},
			effect: {
				'en-us': "This attack does 20 damage for each of your Pokémon, except ◇ (Prism Star) Pokémon, in the Lost Zone.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon dans la Zone Perdue, à l’exception des Pokémon {*} (Prisme Étoile).",
				'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en la Zona Perdida, excepto los Pokémon de {*} (Estrella Prisma).",
				'it-it': "Questo attacco infligge 20 danni per ogni tuo Pokémon nell’area perduta, a eccezione dei Pokémon {*} (stella prisma).",
				'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon na Zona Perdida, exceto por seus Pokémon {*} (Estrela Prisma).",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Pokémon, außer {*}-Pokémon (Prisma-Stern-Pokémon), im Nirgendwo zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "This nuisance sneaks into people's homes, where it hides important things and scatters cotton all over the place.",
	},

	thirdParty: {
		cardmarket: 408384,
		tcgplayer: 201192
	}
}

export default card
