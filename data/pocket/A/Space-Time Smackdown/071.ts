import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'it-it': "Dusclops",
		'de-de': "Zwirrklop",
		'pt-br': "Dusclops",
		'ko-kr': "미라몽"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [356],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Duskull"
	},

	description: {
		'en-us': "It seeks drifting will-o'-the-wisps and sucks them into its empty body. What happens inside is a mystery.",
		'fr-fr': "Il cherche des feux follets pour les avaler.\nCe qu'il se passe alors à l'intérieur\nde son corps vide est un mystère.",
		'es-es': "Busca fuegos fatuos y los absorbe en su cuerpo\nhueco. Lo que pasa dentro luego es un misterio.",
		'it-it': "Va in cerca di fuochi fatui e li risucchia nel suo\ncorpo vuoto. Cosa succeda all'interno è un mistero.",
		'de-de': "Es sucht umherirrende Seelen und saugt sie in\nseinen leeren Körper. Was dann mit ihnen\npassiert, ist ein Rätsel.",
		'pt-br': "Ele procura fogos-fátuos e os suga para seu corpo vazio.\nO que acontece lá dentro é um mistério.",
		'ko-kr': "떠도는 사람의 영혼을 찾아\n텅 빈 체내로 빨아들인다.\n그 후 영혼이 어떻게 되는지는 알 수 없다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Psypunch",
			'fr-fr': "Coup de Poing Psy",
			'es-es': "Psicopuño",
			'it-it': "Psicopugno",
			'de-de': "Psyhieb",
			'pt-br': "Soco Psíquico",
			'ko-kr': "사이코펀치"
		},

		damage: 50,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
