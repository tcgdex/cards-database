import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Swampert",
		fr: "Laggron",
		es: "Swampert",
		it: "Swampert",
		pt: "Swampert",
		de: "Sumpex"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Draw",
				fr: "Puissance de Pioche",
				es: "Robo Poderoso",
				it: "Pesca Vigorosa",
				pt: "Compra Poderosa",
				de: "Kraftzug"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 3 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 3 cartes.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de tu mano. Si lo haces, roba 3 cartas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una delle carte che hai in mano. Se lo fai, pesca tre carte.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta da sua mão. Se fizer isto, compre 3 cartas.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 3 Karten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d’Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
