import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [875],
	set: Set,

	name: {
		'fr-fr': "Bekaglaçon",
		'en-us': "Eiscue",
		'es-es': "Eiscue",
		'it-it': "Eiscue",
		'pt-br': "Eiscue",
		'de-de': "Kubuin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Coup d'Boule",
			'en-us': "Headbutt",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'fr-fr': "Bloc Glacial",
			'en-us': "Frigid Block",
			'es-es': "Bloque Glacial",
			'it-it': "Blocco Glaciale",
			'pt-br': "Bloco Frígido",
			'de-de': "Kühler Block"
		},

		effect: {
			'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon. Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "Discard all Energy from this Pokémon. During your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Descarta todas las Energías de este Pokémon. Durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Scarta tutte le Energie da questo Pokémon. Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Descarte todas as Energias deste Pokémon. Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715522,
				tcgplayer: 497459,
				cardtrader: 248640
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715522,
				tcgplayer: 497459,
				cardtrader: 248640
			}
		},
	],

	illustrator: "kawayoo",

	description: {
		'en-us': "On hot days, these Pokémon press their ice cube heads together and pass the time cooling each other down.",
	},
}

export default card
