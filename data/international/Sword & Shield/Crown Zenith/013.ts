import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		'en-us': "Leafeon V",
		'fr-fr': "Phyllali V",
		'es-es': "Leafeon V",
		'it-it': "Leafeon V",
		'pt-br': "Leafeon V",
		'de-de': "Folipurba V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Leaf Guard",
			'fr-fr': "Feuille Garde",
			'es-es': "Defensa Hoja",
			'it-it': "Fogliamanto",
			'pt-br': "Guarda Folha",
			'de-de': "Floraschild"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Slashing Strike",
			'fr-fr': "Coup Déchirant",
			'es-es': "Golpe Cuchillazo",
			'it-it': "Lacerattacco",
			'pt-br': "Ataque Cortante",
			'de-de': "Schlitzender Schlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Slashing Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691730,
				tcgplayer: 478070
			}
		},
	],
}

export default card
