import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'de-de': "Fiaro",
		'pt-br': "Talonflame",
		'ko-kr': "파이어로"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [663],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Fletchinder"
	},

	description: {
		'en-us': "It has top-notch flying capabilities. It flies around easily, even while carrying prey that weighs more than 220 lbs.",
		'fr-fr': "Ce Pokémon excelle dans l'art de voler.\nIl est même capable de transporter une\nproie de plus de 100 kg sans sourciller.",
		'es-es': "Su pericia en vuelo es excepcional. Revolotea sin inmutarse\naun llevando en sus garras presas de más de 100 kg.",
		'it-it': "Le sue capacità di volo sono stupefacenti.\nRiesce a volare con estrema facilità anche\ndopo aver afferrato una preda di oltre 100 kg.",
		'de-de': "Es verfügt über erstklassige Flugfertigkeiten und kann\nselbst mit ergriffener Beute, die mehr als 100 kg wiegt,\nproblemlos umherfliegen.",
		'pt-br': "Suas técnicas de voo são de alto nível. Voa facilmente,\nmesmo carregando uma presa de quase 100 kg.",
		'ko-kr': "비행 능력은 톱클래스다.\n100kg 이상의 먹이를 잡은 채로도\n가뿐히 날아다닌다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Fire Wing",
			'fr-fr': "Aile de Feu",
			'es-es': "Ala Ígnea",
			'it-it': "Alafiamma",
			'de-de': "Feuerflügel",
			'pt-br': "Asa de Fogo",
			'ko-kr': "불꽃날개"
		},

		damage: 90,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card