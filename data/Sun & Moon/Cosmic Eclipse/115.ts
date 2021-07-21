import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		530,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Eleventh Hour Tackle",
				fr: "Tacle Désespéré",
				es: "Placaje de Última Hora",
				it: "Azione in Extremis",
				pt: "Investida de Última Hora",
				de: "Notstampfer"
			},
			effect: {
				en: "If there are 3 or fewer cards in your deck, this attack does 150 more damage.",
				fr: "S’il y a 3 cartes ou moins dans votre deck, cette attaque inflige 150 dégâts supplémentaires.",
				es: "Si hay 3 cartas o menos en tu baraja, este ataque hace 150 puntos de daño más.",
				it: "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge 150 danni in più.",
				pt: "Se houver 3 ou menos cartas no seu baralho, este ataque causará 150 pontos de dano a mais.",
				de: "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke 150 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Drill Bazooka",
				fr: "Perceuse Bazooka",
				es: "Bazooka Taladro",
				it: "Bazooka Perforante",
				pt: "Bazuca Perfurante",
				de: "Bazooka-Bohrer"
			},
			effect: {
				en: "Discard the top 4 cards of your deck.",
				fr: "Défaussez les 4 cartes du dessus de votre deck.",
				es: "Descarta las 4 primeras cartas de tu baraja.",
				it: "Scarta le prime quattro carte del tuo mazzo.",
				pt: "Descarte as 4 primeiras cartas do seu baralho.",
				de: "Lege die obersten 4 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
