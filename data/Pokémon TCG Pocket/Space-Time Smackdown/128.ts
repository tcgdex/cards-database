import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon2",
		fr: "Porygon2",
		es: "Porygon2",
		it: "Porygon2",
		de: "Porygon2",
		'pt-br': "Porygon2",
		ko: "폴리곤2"
	},

	illustrator: "sowsow",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon"
	},

	description: {
		en: "This is a Porygon that was updated with special data. Porygon2 develops itself by learning about many different subjects all on its own.",
		fr: "Fruit de la mise à jour d'un Porygon avec des données spéciales,\nil peut apprendre et se développer de manière autonome.",
		es: "Se trata de una versión mejorada de Porygon mediante un\nsoftware especial. Tiene capacidad de aprendizaje autónomo.",
		it: "È un Porygon aggiornato con dei dati particolari.\nCresce imparando autonomamente svariate cose.",
		de: "Durch ein Update mit besonderen Daten wurde\nPorygon zu Porygon2. Es erweitert sein Wissen,\nindem es selbstständig verschiedene Dinge lernt.",
		'pt-br': "Este é um Porygon que foi atualizado com dados\nespeciais. Porygon2 se desenvolve ao aprender\nsobre diversos assuntos por conta própria.",
		ko: "폴리곤을 특별한 데이터로\n업데이트했다. 다양한 것을\n스스로 배우고 성장한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sharpen",
			fr: "Affûtage",
			es: "Afilar",
			it: "Affilatore",
			de: "Schärfer",
			'pt-br': "Afiar",
			ko: "각지기"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
