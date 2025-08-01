import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Gogoat",
		fr: "Chevroum",
		es: "Gogoat",
		it: "Gogoat",
		pt: "Gogoat",
		de: "Chevrumm"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		673,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
		es: "Skiddo",
		it: "Skiddo",
		pt: "Skiddo",
		de: "Mähikel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lead",
				fr: "Mentor",
				es: "Liderazgo",
				it: "Guidare",
				pt: "Liderar",
				de: "Führen"
			},
			effect: {
				en: "Search your deck for up to 2 Supporter cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 cartes Supporter dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Partidario, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a due carte Aiuto, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho até 2 cards de Apoiador, revele-os e coloque-os em sua mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 2 Unterstützerkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charge Dash",
				fr: "Attaque Précipitée",
				es: "Carga Arrojada",
				it: "Corsacarica",
				pt: "Rasgo Feroz",
				de: "Sturmlauf"
			},
			effect: {
				en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				es: "Puedes hacer 20 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Puoi infliggere 20 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				pt: "Você pode causar 20 de danos adicionais. Se você fizer isso, o Pokémon causará 20 de danos a ele mesmo.",
				de: "Du kannst mit diesem Angriff 20 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281356
	}
}

export default card
