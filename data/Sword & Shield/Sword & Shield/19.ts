import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Orbeetle",
		fr: "Astronelle",
		es: "Orbeetle",
		it: "Orbeetle",
		pt: "Orbeetle",
		de: "Maritellit"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Dottler",
		fr: "Coléodôme",
		es: "Dottler",
		it: "Dottler",
		pt: "Dottler",
		de: "Keradar"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bug's Radar",
				fr: "Radar d'Insecte",
				es: "Radar de Bichos",
				it: "Coleoradar",
				pt: "Radar de Inseto",
				de: "Käferradar"
			},
			effect: {
				en: "Once during your turn, you may look at the top 3 cards of your opponent's deck and put them back in any order.",
				fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus du deck de votre adversaire, puis les replacer dans l'ordre désiré.",
				es: "Una vez durante tu turno, puedes mirar las 3 primeras cartas de la baraja de tu rival y volver a ponerlas en la parte superior de su baraja en el orden que quieras.",
				it: "Una sola volta durante il tuo turno, puoi guardare le prime tre carte del mazzo del tuo avversario e rimetterle a posto nell'ordine che preferisci.",
				pt: "Uma vez durante o seu turno, você poderá olhar as 3 cartas de cima do baralho do seu oponente e colocá-las de volta em qualquer ordem.",
				de: "Einmal während deines Zuges kannst du dir die obersten 3 Karten des Decks deines Gegners anschauen und sie in beliebiger Reihenfolge zurücklegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Brainwave",
				fr: "Onde Cérébrale",
				es: "Onda Cerebral",
				it: "Onda Cerebrale",
				pt: "Onda Cerebral",
				de: "Gehirnwelle"
			},
			effect: {
				en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata a questo Pokémon.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a este Pokémon.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "It emits psychic energy to observe and study what's around it—and what's around it can include things over six miles away."
	},

	dexId: [826]
}

export default card
