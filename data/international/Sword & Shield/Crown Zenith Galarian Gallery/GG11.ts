import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [337],
	set: Set,

	name: {
		'en-us': "Lunatone",
		'fr-fr': "Séléroc",
		'es-es': "Lunatone",
		'it-it': "Lunatone",
		'pt-br': "Lunatone",
		'de-de': "Lunastein"
	},

	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Cycle Draw",
			'fr-fr': "Pioche Cyclique",
			'es-es': "Ciclorrobo",
			'it-it': "Pesca Ciclica",
			'pt-br': "Compra Cíclica",
			'de-de': "Kreiszug"
		},

		effect: {
			'en-us': "Discard a card from your hand. If you do, draw 3 cards.",
			'fr-fr': "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
			'es-es': "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas.",
			'it-it': "Scarta una delle carte che hai in mano. Se lo fai, pesca tre carte.",
			'pt-br': "Descarte 1 carta da sua mão. Se fizer isto, compre 3 cartas.",
			'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Moon Kinesis",
			'fr-fr': "Kinésie Lunaire",
			'es-es': "Lunaquinesis",
			'it-it': "Lunacinesi",
			'pt-br': "Cinese Lunar",
			'de-de': "Mondkinese"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The phase of the moon apparently has some effect on its power. It's active on the night of a full moon.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691890,
				tcgplayer: 478028
			}
		},
	],
}

export default card
