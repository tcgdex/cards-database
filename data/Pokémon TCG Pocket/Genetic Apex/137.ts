import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Sandshrew",
		fr: "Sabelette",
		es: "Sandshrew",
		it: "Sandshrew",
		de: "Sandan",
		'pt-br': "Sandshrew",
		ko: "모래두지"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			de: "Kratzer",
			'pt-br': "Arranhão",
			ko: "할퀴기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.",
		fr: "Il aime se rouler dans le sable des zones\ndésertiques pour se débarrasser des traces\nde terre et d'humidité qui lui collent à la peau.",
		es: "Le gusta revolcarse por la arena seca para eliminar\ntodo rastro de suciedad y humedad en la piel.",
		it: "Ama rotolarsi nella sabbia delle zone\ndesertiche, per rimuovere ogni traccia\ndi sporcizia e umidità dal suo corpo.",
		de: "Es badet sehr gern im trockenen Sand.\nDadurch befreit es seinen Körper von\nSchmutz und Feuchtigkeit.",
		'pt-br': "Adora banhar-se na areia ressecada. Ao\nfazer isso, este Pokémon se livra da sujeira\ne da umidade grudadas em seu corpo.",
		ko: "건조한 모래땅에서 모래를 끼얹는 것을\n좋아한다. 몸에 붙은 지저분한 것들을\n떨어뜨리고 물기를 없애는 것이다."
	}
}

export default card
