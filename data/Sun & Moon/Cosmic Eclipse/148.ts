import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
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
		en: "Cottonee",
		fr: "Doudouvet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Sneaky Pocket",
				fr: "Poche Cachée",
				es: "Bolsillo Pillo",
				it: "Intrufolamento Furtivo",
				pt: "Bolso Secreto",
				de: "Gewiefte Tasche"
			},
			effect: {
				en: "Put a card from your hand in the Lost Zone. If you do, draw 3 cards.",
				fr: "Placez une carte de votre main dans la Zone Perdue. Dans ce cas, piochez 3 cartes.",
				es: "Pon 1 carta de tu mano en la Zona Perdida. Si lo haces, roba 3 cartas.",
				it: "Prendi una carta che hai in mano e mettila nell’area perduta. Se lo fai, pesca tre carte.",
				pt: "Coloque 1 carta da sua mão na Zona Perdida. Se fizer isto, compre 3 cartas.",
				de: "Lege 1 Karte aus deiner Hand ins Nirgendwo. Wenn du das machst, ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lost March",
				fr: "Marche Perdue",
				es: "Marcha Perdida",
				it: "Marcia Perduta",
				pt: "Marcha Perdida",
				de: "Nirgendwo-Marsch"
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon, except ◇ (Prism Star) Pokémon, in the Lost Zone.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon dans la Zone Perdue, à l’exception des Pokémon {*} (Prisme Étoile).",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en la Zona Perdida, excepto los Pokémon de {*} (Estrella Prisma).",
				it: "Questo attacco infligge 20 danni per ogni tuo Pokémon nell’area perduta, a eccezione dei Pokémon {*} (stella prisma).",
				pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon na Zona Perdida, exceto por seus Pokémon {*} (Estrela Prisma).",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Pokémon, außer {*}-Pokémon (Prisma-Stern-Pokémon), im Nirgendwo zu."
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

	thirdParty: {
		cardmarket: 408384
	}
}

export default card
