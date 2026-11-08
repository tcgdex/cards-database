import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [558],
	set: Set,

	name: {
		'en-us': "Crustle",
		'fr-fr': "Crabaraque",
		'es-es': "Crustle",
		'it-it': "Crustle",
		'pt-br': "Crustle",
		'de-de': "Castellith"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'es-es': "Dwebble",
		'it-it': "Dwebble",
		'pt-br': "Dwebble",
		'de-de': "Lithomith"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Confront",
			'fr-fr': "Confrontation",
			'es-es': "Confrontar",
			'it-it': "Confronto",
			'pt-br': "Confrontar",
			'de-de': "Konfrontieren"
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Crag Bash",
			'fr-fr': "Coup de Rochers",
			'es-es': "Golpe Peñasco",
			'it-it': "Colporupe",
			'pt-br': "Quebra-rocha",
			'de-de': "Felswumme"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 100 less damage from attacks from Evolution Pokémon (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques de Pokémon Évolutifs (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques de los Pokémon Evolución hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi dei Pokémon Evoluzione, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques de Pokémon de Evolução (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken von Entwicklungs-Pokémon 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Its thick claws are its greatest weapons. They're mighty enough to crack Rhyperior's carapace.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740483,
				tcgplayer: 523606,
				cardtrader: 265009
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740483,
				tcgplayer: 523606,
				cardtrader: 265009
			}
		},
	],

	illustrator: "Shin Nagasawa",

	
}

export default card
