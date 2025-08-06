import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Leafeon V",
		fr: "Phyllali V",
		es: "Leafeon V",
		it: "Leafeon V",
		pt: "Leafeon V",
		de: "Folipurba V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "You Iribi",

	abilities: [{
		type: "Ability",

		name: {
			en: "Greening Cells",
			fr: "Cellules Verdoyantes",
			es: "Células Reverdecientes",
			it: "Cellule Verdeggianti",
			pt: "Greening Cells",
			de: "Grünende Zellen"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie Grass, puis l'attacher à l'un de vos Pokémon. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía Grass y unirla a 1 de tus Pokémon. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia Grass e assegnarla a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			pt: "Once during your turn, you may search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck. If you use this Ability, your turn ends.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Grass-Energiekarte durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		name: {
			en: "Leaf Blade",
			fr: "Lame Feuille",
			es: "Hoja Aguda",
			it: "Fendifoglia",
			pt: "Leaf Blade",
			de: "Laubklinge"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			pt: "Flip a coin. If heads, this attack does 60 more damage.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	dexId: [470],
	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 574031,
		tcgplayer: 246688
	}
}

export default card
