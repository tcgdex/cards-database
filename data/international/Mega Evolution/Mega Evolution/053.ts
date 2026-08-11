import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
		'de-de': "Elezard",
		'it-it': "Heliolisk",
		'es-es': "Heliolisk",
		'pt-br': "Heliolisk",
		'es-mx': "Heliolisk"
	},

	illustrator: "Nakamura Ippan",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'de-de': "Eguana",
		'it-it': "Helioptile",
		'es-es': "Helioptile",
		'pt-br': "Helioptile",
		'es-mx': "Helioptile"
	},
	stage: "Stage1",
	dexId: [695],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dazzle Blast",
			'fr-fr': "Explosion de Lumière",
			'de-de': "Blendende Explosion",
			'it-it': "Accecobomba",
			'es-es': "Destello Deslumbrante",
			'pt-br': "Explosão Fascinante",
			'es-mx': "Explosión Deslumbrante"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal",
			'de-de': "Kopf-Blitz",
			'it-it': "Zuccalampo",
			'es-es': "Rayo de Cabeza",
			'pt-br': "Raio de Cabeça",
			'es-mx': "Rayo Capital"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851124,
				tcgplayer: 654392
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851124,
				tcgplayer: 654392
			}
		},
	],
}

export default card
