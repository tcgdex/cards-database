import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		de: "Kosturso",
		'pt-br': "Bewear",
		ko: "이븐곰"
	},

	illustrator: "Tomowaka",
	rarity: "One Star",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Stufful"
	},

	description: {
		en: "Once it accepts you as a friend, it tries to show its affection with a hug. Letting it do that is dangerous—it could easily shatter your bones.",
		fr: "Il serre fort contre lui ceux qu'il considère\ncomme ses compagnons, mais ses câlins\nsont assez puissants pour broyer les os.",
		es: "Expresa su afecto abrazando a quien considera\nsu amigo. Una costumbre peligrosa, ya que su\nfuerza puede romperle los huesos a cualquiera.",
		it: "Cerca di abbracciare chi considera suo amico in\nsegno di affetto, ma bisogna guardarsi dalla sua\nstretta, talmente potente da frantumare le ossa.",
		de: "Es drückt seine Zuneigung durch Umarmungen aus.\nDas ist ebenso sympathisch wie gefährlich, da diese\nzu Knochenbrüchen führen können.",
		'pt-br': "Ao aceitar a sua amizade, este Pokémon tentará mostrar\nafeição com um abraço. Deixar-se abraçar por Bewear\npode ser perigoso, já que poderá deixar seus ossos em pedaços.",
		ko: "동료로 인정하면 애정을\n표현하기 위해 껴안으려 하지만\n뼈가 으스러질 수 있으므로 위험하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tantrum",
			fr: "Mauvaise Humeur",
			es: "Rabieta",
			it: "Collera",
			de: "Rappel",
			'pt-br': "Petulância",
			ko: "날뛰기"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
			es: "Este Pokémon pasa a estar Confundido.",
			it: "Questo Pokémon viene confuso.",
			de: "Dieses Pokémon ist jetzt verwirrt.",
			'pt-br': "Este Pokémon agora está Confused.",
			ko: "이 포켓몬을 혼란으로 만든다.",
			'pt-br': "Este Pokémon agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card