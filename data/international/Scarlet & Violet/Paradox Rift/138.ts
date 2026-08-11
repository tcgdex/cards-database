import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [968],
	set: Set,

	name: {
		'en-us': "Orthworm",
		'fr-fr': "Ferdeter",
		'es-es': "Orthworm",
		'it-it': "Orthworm",
		'pt-br': "Orthworm",
		'de-de': "Schlurm"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Punch and Draw",
			'fr-fr': "Poing et Pioche",
			'es-es': "Puñetazo y Robo",
			'it-it': "Pugnopesca",
			'pt-br': "Socar e Comprar",
			'de-de': "Schlagen und ziehen"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Crunch-Time Rush",
			'fr-fr': "Ruée Pressée",
			'es-es': "Golpe de la Verdad",
			'it-it': "Assalto in Extremis",
			'pt-br': "Pressa Apressada",
			'de-de': "Stürmischer Endspurt"
		},

		effect: {
			'en-us': "If there are 3 or fewer cards in your deck, this attack does 150 more damage.",
			'fr-fr': "S'il y a 3 cartes ou moins dans votre deck, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si hay 3 cartas o menos en tu baraja, este ataque hace 150 puntos de daño más.",
			'it-it': "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge 150 danni in più.",
			'pt-br': "Se houver 3 ou menos cartas no seu baralho, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "When attacked, this Pokémon will wield the tendrils on its body like fists and pelt the opponent with a storm of punches.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740676,
				tcgplayer: 523817,
				cardtrader: 265254
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740676,
				tcgplayer: 523817,
				cardtrader: 265254
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
