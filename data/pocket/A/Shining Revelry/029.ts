import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Abra",
		'fr-fr': "Abra",
		'es-es': "Abra",
		'it-it': "Abra",
		'de-de': "Abra",
		'pt-br': "Abra",
		'ko-kr': "캐이시"
	},

	illustrator: "Mousho",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [63],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "This Pokémon uses its psychic powers while it sleeps. The contents of Abra's dreams affect the powers that the Pokémon wields.",
		'fr-fr': "Le contenu de ses rêves influe sur les pouvoirs\npsychiques qu'il utilise dans son sommeil.",
		'es-es': "Es capaz de usar sus poderes psíquicos aun\nestando dormido. Al parecer, el contenido\ndel sueño influye en sus facultades.",
		'it-it': "Il contenuto dei suoi sogni influisce sui suoi poteri\npsichici, che può utilizzare anche mentre dorme.",
		'de-de': "Es setzt seine Psycho-Kräfte selbst im\nSchlaf ein. Der Inhalt seiner Träume hat\nEinfluss auf die Kräfte, die es verwendet.",
		'pt-br': "Usa seus poderes psíquicos enquanto dorme.\nO conteúdo dos sonhos de Abra afeta os\npoderes que este Pokémon possui.",
		'ko-kr': "자면서 초능력을 구사한다.\n꿈의 내용이\n사용하는 힘에 영향을 준다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'de-de': "Psychoschuss",
			'pt-br': "Tiro Psíquico",
			'ko-kr': "사이코숏"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card