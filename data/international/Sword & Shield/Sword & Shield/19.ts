import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Orbeetle",
		'fr-fr': "Astronelle",
		'es-es': "Orbeetle",
		'it-it': "Orbeetle",
		'pt-br': "Orbeetle",
		'de-de': "Maritellit"
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
		'en-us': "Dottler",
		'fr-fr': "Coléodôme",
		'es-es': "Dottler",
		'it-it': "Dottler",
		'pt-br': "Dottler",
		'de-de': "Keradar"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bug's Radar",
				'fr-fr': "Radar d'Insecte",
				'es-es': "Radar de Bichos",
				'it-it': "Coleoradar",
				'pt-br': "Radar de Inseto",
				'de-de': "Käferradar"
			},
			effect: {
				'en-us': "Once during your turn, you may look at the top 3 cards of your opponent's deck and put them back in any order.",
				'fr-fr': "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus du deck de votre adversaire, puis les replacer dans l'ordre désiré.",
				'es-es': "Una vez durante tu turno, puedes mirar las 3 primeras cartas de la baraja de tu rival y volver a ponerlas en la parte superior de su baraja en el orden que quieras.",
				'it-it': "Una sola volta durante il tuo turno, puoi guardare le prime tre carte del mazzo del tuo avversario e rimetterle a posto nell'ordine che preferisci.",
				'pt-br': "Uma vez durante o seu turno, você poderá olhar as 3 cartas de cima do baralho do seu oponente e colocá-las de volta em qualquer ordem.",
				'de-de': "Einmal während deines Zuges kannst du dir die obersten 3 Karten des Decks deines Gegners anschauen und sie in beliebiger Reihenfolge zurücklegen."
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
				'en-us': "Brainwave",
				'fr-fr': "Onde Cérébrale",
				'es-es': "Onda Cerebral",
				'it-it': "Onda Cerebrale",
				'pt-br': "Onda Cerebral",
				'de-de': "Gehirnwelle"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
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
		'en-us': "It emits psychic energy to observe and study what's around it—and what's around it can include things over six miles away."
	},

	dexId: [826],

	thirdParty: {
		cardmarket: 436264,
		tcgplayer: 208298
	}
}

export default card
