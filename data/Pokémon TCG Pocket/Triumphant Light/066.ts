import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Starly",
		fr: "Étourmi",
		es: "Starly",
		it: "Starly",
		de: "Staralili",
		'pt-br': "Starly",
		ko: "찌르꼬"
	},

	illustrator: "Apios",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
		fr: "Ils cherchent des Pokémon Insecte par monts et par\nvaux en grandes volées. Leur chant est très bruyant.",
		es: "Sobrevuela los campos en bandada buscando Pokémon\nde tipo Bicho. Chilla de forma muy estridente.",
		it: "Sorvola i campi in grandi stormi a caccia di Pokémon\nColeottero. Il suo canto è alquanto fastidioso.",
		de: "Auf der Suche nach Käfer-Pokémon fliegen Schwärme\nvon ihnen durchs Land. Ihr Ruf erzeugt großen Lärm.",
		'pt-br': "Juntam-se ao redor de montanhas e campos,\ncaçando Pokémon inseto. Seu canto é barulhento\ne irritante.",
		ko: "벌레포켓몬을 노리고 산과 들을\n많은 무리로 날아다닌다.\n울음소리가 무척 시끄럽다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Glide",
			fr: "Glissement",
			es: "Planeo",
			it: "Aliante",
			de: "Gleiten",
			'pt-br': "Planeio",
			ko: "활공"
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
