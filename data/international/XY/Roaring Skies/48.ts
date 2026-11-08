import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Klefki",
		'fr-fr': "Trousselin",
		'es-es': "Klefki",
		'it-it': "Klefki",
		'pt-br': "Klefki",
		'de-de': "Clavion"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		707,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Look for Keys",
				'fr-fr': "Recherch'Clés",
				'es-es': "Buscallaves",
				'it-it': "Cercachiavi",
				'pt-br': "Procurar Chaves",
				'de-de': "Schlüsselsuche"
			},
			effect: {
				'en-us': "Reveal cards from the top of your deck until you reveal an Item card. Put it into your hand. Shuffle the other cards back into your deck.",
				'fr-fr': "Montrez des cartes du dessus de votre deck jusqu'à ce que vous montriez une carte Objet. Ajoutez-la à votre main. Mélangez les autres cartes avec votre deck.",
				'es-es': "Ve enseñando cartas de la parte superior de tu baraja hasta que enseñes 1 carta de Objeto. Ponla en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				'it-it': "Scopri le carte in cima al tuo mazzo fino a quando non trovi una carta Strumento. Aggiungila a quelle che hai in mano, poi rimischia le altre carte nel tuo mazzo.",
				'pt-br': "Revele cards do topo do seu baralho até revelar um card de Item. Coloque-o em sua mão. Embaralhe os demais cards de volta.",
				'de-de': "Decke solang Karten von deinem Deck auf, bis du eine Itemkarte aufdeckst. Nimm sie auf deine Hand. Mische die anderen Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Play Rough",
				'fr-fr': "Câlinerie",
				'es-es': "Carantoña",
				'it-it': "Carineria",
				'pt-br': "Jogo Duro",
				'de-de': "Knuddler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

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

	retreat: 1,

	description: {
		'en-us': "These key collectors threaten any attackers by fiercely jingling their keys at them.",
	},

	thirdParty: {
		cardmarket: 282716,
		tcgplayer: 98084
	}
}

export default card
