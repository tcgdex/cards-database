import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		de: "Dartiri",
		it: "Fletchling",
		pt: "Fletchling"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		661
	],
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Chirp",
				fr: "Gazouillis",
				es: "Gorjeo",
				de: "Zwitscherer",
				it: "Cinguettio",
				pt: "Gorjeio"
			},
			effect: {
				en: "Search your deck for up to 2 Pokémon with [F] Resistance, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon avec une Résistance à [F], montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon con Resistencia a [F], enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
				de: "Durchsuche dein Deck nach bis zu 2 Pokémon mit [F]-Resistenz, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
				it: "Cerca nel tuo mazzo fino a due Pokémon con resistenza al tipo [F], mostrali e aggiungili alle carte che hai in mano. Poi rimischia il tuo mazzo.",
				pt: "Procure por até 2 Pokémon com Resistência [F] no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				de: "Pikser",
				it: "Beccata",
				pt: "Bicada"
			},
			damage: "20"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "sowsow",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684403,
		cardmarket: 877482
	}
}

export default card
