import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'de-de': "Porygon2",
		'pt-br': "Porygon2",
		'ko-kr': "폴리곤2"
	},

	illustrator: "sowsow",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [233],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Porygon"
	},

	description: {
		'en-us': "This is a Porygon that was updated with special data. Porygon2 develops itself by learning about many different subjects all on its own.",
		'fr-fr': "Fruit de la mise à jour d'un Porygon avec des données spéciales,\nil peut apprendre et se développer de manière autonome.",
		'es-es': "Se trata de una versión mejorada de Porygon mediante un\nsoftware especial. Tiene capacidad de aprendizaje autónomo.",
		'it-it': "È un Porygon aggiornato con dei dati particolari.\nCresce imparando autonomamente svariate cose.",
		'de-de': "Durch ein Update mit besonderen Daten wurde\nPorygon zu Porygon2. Es erweitert sein Wissen,\nindem es selbstständig verschiedene Dinge lernt.",
		'pt-br': "Este é um Porygon que foi atualizado com dados\nespeciais. Porygon2 se desenvolve ao aprender\nsobre diversos assuntos por conta própria.",
		'ko-kr': "폴리곤을 특별한 데이터로\n업데이트했다. 다양한 것을\n스스로 배우고 성장한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Sharpen",
			'fr-fr': "Affûtage",
			'es-es': "Afilar",
			'it-it': "Affilatore",
			'de-de': "Schärfer",
			'pt-br': "Afiar",
			'ko-kr': "각지기"
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
