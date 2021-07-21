import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Silvally",
		fr: "Silvallié",
		es: "Silvally",
		it: "Silvally",
		pt: "Silvally",
		de: "Amigento"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		773,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gear Scan",
				fr: "Scan d’Engrenage",
				es: "Escaneo Engranaje",
				it: "Scansione Meccanica",
				pt: "Escanear por Engrenagem",
				de: "Zubehörscan"
			},
			effect: {
				en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				es: "Tijera X",
				it: "Forbice X",
				pt: "Tesoura X",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
