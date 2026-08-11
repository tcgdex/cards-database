import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		'fr-fr': "Phyllali V",
		'de-de': "Folipurba V",
		'es-es': "Leafeon V",
		'pt-br': "Leafeon V",
		'it-it': "Leafeon V",
		'en-us': "Leafeon V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Feuille Garde",
			'de-de': "Floraschild",
			'es-es': "Defensa Hoja",
			'pt-br': "Guarda Folha",
			'it-it': "Fogliamanto",
			'en-us': "Leaf Guard"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'fr-fr': "Coup Déchirant",
			'de-de': "Schlitzender Schlag",
			'es-es': "Golpe Cuchillazo",
			'pt-br': "Ataque Cortante",
			'it-it': "Lacerattacco",
			'en-us': "Slashing Strike"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			'en-us': "During your next turn, this Pokémon can't use Slashing Strike."
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

	thirdParty: {
		cardmarket: 606748
	}
}

export default card
