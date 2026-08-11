import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'de-de': "Kosturso",
		'pt-br': "Bewear",
		'ko-kr': "이븐곰"
	},

	illustrator: "Tomowaka",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [760],
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Stufful"
	},

	description: {
		'en-us': "Once it accepts you as a friend, it tries to show its affection with a hug. Letting it do that is dangerous—it could easily shatter your bones.",
		'fr-fr': "Il serre fort contre lui ceux qu'il considère\ncomme ses compagnons, mais ses câlins\nsont assez puissants pour broyer les os.",
		'es-es': "Expresa su afecto abrazando a quien considera\nsu amigo. Una costumbre peligrosa, ya que su\nfuerza puede romperle los huesos a cualquiera.",
		'it-it': "Cerca di abbracciare chi considera suo amico in\nsegno di affetto, ma bisogna guardarsi dalla sua\nstretta, talmente potente da frantumare le ossa.",
		'de-de': "Es drückt seine Zuneigung durch Umarmungen aus.\nDas ist ebenso sympathisch wie gefährlich, da diese\nzu Knochenbrüchen führen können.",
		'pt-br': "Ao aceitar a sua amizade, este Pokémon tentará mostrar\nafeição com um abraço. Deixar-se abraçar por Bewear\npode ser perigoso, já que poderá deixar seus ossos em pedaços.",
		'ko-kr': "동료로 인정하면 애정을\n표현하기 위해 껴안으려 하지만\n뼈가 으스러질 수 있으므로 위험하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Tantrum",
			'fr-fr': "Mauvaise Humeur",
			'es-es': "Rabieta",
			'it-it': "Collera",
			'de-de': "Rappel",
			'pt-br': "Petulância",
			'ko-kr': "날뛰기"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This Pokémon is now Confused.",
			'fr-fr': "Ce Pokémon est maintenant Confus.",
			'es-es': "Este Pokémon pasa a estar Confundido.",
			'it-it': "Questo Pokémon viene confuso.",
			'de-de': "Dieses Pokémon ist jetzt verwirrt.",
			
			'ko-kr': "이 포켓몬을 혼란으로 만든다.",
			'pt-br': "Este Pokémon agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lunala"]
}

export default card