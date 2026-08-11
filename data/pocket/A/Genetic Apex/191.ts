import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
		'es-es': "Spearow",
		'it-it': "Spearow",
		'de-de': "Habitak",
		'pt-br': "Spearow",
		'ko-kr': "깨비참"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",

	dexId: [21],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'de-de': "Pikser",
			'pt-br': "Bicada",
			'ko-kr': "쪼기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "Its reckless nature leads it to stand up to others—even large Pokémon—if it has to protect its territory.",
		'fr-fr': "Un Pokémon téméraire qui n'hésite pas\nà affronter des Pokémon plus gros que lui\npour protéger son territoire.",
		'es-es': "Su temperamento temerario hace que no\ndude en enfrentarse a rivales mucho más\ngrandes a la hora de defender su territorio.",
		'it-it': "Temerario di natura, per difendere\nil proprio territorio non esita a lanciarsi\nanche contro avversari più grandi di lui.",
		'de-de': "Wenn es um die Verteidigung seines Reviers\ngeht, schreckt das draufgängerische Habitak\nselbst vor großen Pokémon nicht zurück.",
		'pt-br': "Sua natureza descuidada leva Spearow a\nencarar até Pokémon maiores quando\nprecisa proteger o seu território.",
		'ko-kr': "자신의 영역을 지키기 위해서라면\n상대가 큰 포켓몬이라도\n덤벼드는 무모한 성질을 가졌다."
	},

	boosters: ["charizard"]
}

export default card
