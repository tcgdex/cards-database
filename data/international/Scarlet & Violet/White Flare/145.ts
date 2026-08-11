import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [630],
	set: Set,

	name: {
		'en-us': "Mandibuzz",
		'fr-fr': "Vaututrice",
		'de-de': "Grypheldis",
		'it-it': "Mandibuzz",
		'pt-br': "Mandibuzz",
		'es-es': "Mandibuzz",
		'es-mx': "Mandibuzz"
	},

	illustrator: "Bun Toujo",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
		'de-de': "Skallyk",
		'it-it': "Vullaby",
		'pt-br': "Vullaby",
		'es-es': "Vullaby",
		'es-mx': "Vullaby"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Look for Prey",
			'fr-fr': "En Quête d'une Proie",
			'de-de': "Beutesuche",
			'it-it': "Cercapreda",
			'pt-br': "Acossar Presas",
			'es-es': "Buscapresa",
			'es-mx': "Buscapresa"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Your opponent reveals their hand, and you put a Basic Pokémon with 70 HP or less that you find there onto your opponent's Bench.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Votre adversaire montre sa main, puis vous placez un Pokémon de base ayant 70 PV ou moins que vous y trouvez sur le Banc de votre adversaire.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Dein Gegner zeigt dir seine Handkarten und du legst 1 Basis-Pokémon mit 70 oder weniger KP, das du dort findest, auf die Bank deines Gegners.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Il tuo avversario mostra le carte che ha in mano e tu metti un Pokémon Base con 70 PS o meno presente tra esse nella sua panchina.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Seu oponente revela a mão dele, e você coloca um Pokémon Básico com 70 PS ou menos que encontrar lá no Banco do seu oponente.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Tu rival enseña las cartas de su mano, y tú pones 1 Pokémon Básico con 70 PS o menos que encuentres entre ellas en la Banca de tu rival.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Tu rival muestra las cartas de su mano, y tú pones 1 Pokémon Básico con 70 PS o menos que encuentres entre ellas en la Banca de tu rival."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'de-de': "Schneidender Wind",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'es-es': "Viento Helado",
			'es-mx': "Viento Tajante"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836175,
				tcgplayer: 642594
			}
		},
	],
}

export default card
