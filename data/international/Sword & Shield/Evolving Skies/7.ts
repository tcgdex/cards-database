import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Leafeon V",
		'fr-fr': "Phyllali V",
		'es-es': "Leafeon V",
		'it-it': "Leafeon V",
		'pt-br': "Leafeon V",
		'de-de': "Folipurba V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Greening Cells",
			'fr-fr': "Cellules Verdoyantes",
			'es-es': "Células Reverdecientes",
			'it-it': "Cellule Verdeggianti",
			'pt-br': "Greening Cells",
			'de-de': "Grünende Zellen"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck. If you use this Ability, your turn ends.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie Grass, puis l'attacher à l'un de vos Pokémon. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía Grass y unirla a 1 de tus Pokémon. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia Grass e assegnarla a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			'pt-br': "Once during your turn, you may search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck. If you use this Ability, your turn ends.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Grass-Energiekarte durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Leaf Blade",
			'fr-fr': "Lame Feuille",
			'es-es': "Hoja Aguda",
			'it-it': "Fendifoglia",
			'pt-br': "Leaf Blade",
			'de-de': "Laubklinge"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			'pt-br': "Flip a coin. If heads, this attack does 60 more damage.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574031,
				tcgplayer: 246685
			}
		},
	],
}

export default card
