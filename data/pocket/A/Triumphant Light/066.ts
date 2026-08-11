import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Starly",
		'fr-fr': "Étourmi",
		'es-es': "Starly",
		'it-it': "Starly",
		'de-de': "Staralili",
		'pt-br': "Starly",
		'ko-kr': "찌르꼬"
	},

	illustrator: "Apios",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [396],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
		'fr-fr': "Ils cherchent des Pokémon Insecte par monts et par\nvaux en grandes volées. Leur chant est très bruyant.",
		'es-es': "Sobrevuela los campos en bandada buscando Pokémon\nde tipo Bicho. Chilla de forma muy estridente.",
		'it-it': "Sorvola i campi in grandi stormi a caccia di Pokémon\nColeottero. Il suo canto è alquanto fastidioso.",
		'de-de': "Auf der Suche nach Käfer-Pokémon fliegen Schwärme\nvon ihnen durchs Land. Ihr Ruf erzeugt großen Lärm.",
		'pt-br': "Juntam-se ao redor de montanhas e campos,\ncaçando Pokémon inseto. Seu canto é barulhento\ne irritante.",
		'ko-kr': "벌레포켓몬을 노리고 산과 들을\n많은 무리로 날아다닌다.\n울음소리가 무척 시끄럽다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'de-de': "Gleiten",
			'pt-br': "Planeio",
			'ko-kr': "활공"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
