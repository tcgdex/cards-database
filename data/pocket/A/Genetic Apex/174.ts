import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'es-es': "Grimer",
		'it-it': "Grimer",
		'de-de': "Sleima",
		'pt-br': "Grimer",
		'ko-kr': "질퍽이"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",

	dexId: [88],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Poison Gas",
			'fr-fr': "Gaz Toxik",
			'es-es': "Gas Venenoso",
			'it-it': "Velenogas",
			'de-de': "Giftwolke",
			'pt-br': "Gás Venenoso",
			'ko-kr': "독가스"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			
			'ko-kr': "상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "One Diamond",

	description: {
		'en-us': "Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.",
		'fr-fr': "Torrent de boue devenu Pokémon, il vit dans\nles lieux les plus insalubres pour que le nombre\nde microbes qu'il héberge augmente.",
		'es-es': "Formados a partir de lodo, los Grimer se\njuntan en lugares sucios para aumentar\nel número de gérmenes de su cuerpo.",
		'it-it': "Un Pokémon nato dalla melma. Predilige\ni posti sporchi perché gli permettono\ndi aumentare la sua carica batterica.",
		'de-de': "Diese aus Schlamm entstandenen Pokémon\nscharen sich an dreckigen Orten, um ihre\nkörpereigenen Bakterien zu kultivieren.",
		'pt-br': "Nascidos no lodo, esses Pokémon agora\nreúnem-se em locais poluídos e aumentam\na quantidade de bactérias em seus corpos.",
		'ko-kr': "오물이 포켓몬이 되었다.\n더러운 장소에 모여\n몸의 세균을 번식시킨다."
	},

	boosters: ["mewtwo"]
}

export default card
