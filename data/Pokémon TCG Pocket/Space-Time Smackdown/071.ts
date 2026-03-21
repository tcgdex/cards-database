import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		de: "Zwirrklop",
		'pt-br': "Dusclops",
		ko: "미라몽"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [356],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Duskull"
	},

	description: {
		en: "It seeks drifting will-o'-the-wisps and sucks them into its empty body. What happens inside is a mystery.",
		fr: "Il cherche des feux follets pour les avaler.\nCe qu'il se passe alors à l'intérieur\nde son corps vide est un mystère.",
		es: "Busca fuegos fatuos y los absorbe en su cuerpo\nhueco. Lo que pasa dentro luego es un misterio.",
		it: "Va in cerca di fuochi fatui e li risucchia nel suo\ncorpo vuoto. Cosa succeda all'interno è un mistero.",
		de: "Es sucht umherirrende Seelen und saugt sie in\nseinen leeren Körper. Was dann mit ihnen\npassiert, ist ein Rätsel.",
		'pt-br': "Ele procura fogos-fátuos e os suga para seu corpo vazio.\nO que acontece lá dentro é um mistério.",
		ko: "떠도는 사람의 영혼을 찾아\n텅 빈 체내로 빨아들인다.\n그 후 영혼이 어떻게 되는지는 알 수 없다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psypunch",
			fr: "Coup de Poing Psy",
			es: "Psicopuño",
			it: "Psicopugno",
			de: "Psyhieb",
			'pt-br': "Soco Psíquico",
			ko: "사이코펀치"
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
