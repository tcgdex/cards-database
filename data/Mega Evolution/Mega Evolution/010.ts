import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Meganium",
		fr: "Méganium",
		de: "Meganie",
		it: "Meganium",
		es: "Meganium",
		pt: "Meganium",
		'es-mx': "Meganium"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
		de: "Lorblatt",
		it: "Bayleef",
		es: "Bayleef",
		pt: "Bayleef",
		'es-mx': "Bayleef"
	},
	stage: "Stage2",
	dexId: [154],

	abilities: [{
		type: "Ability",

		name: {
			en: "Wild Growth",
			fr: "Luxuriance",
			de: "Wildes Wachstum",
			it: "Crescita Incontrollata",
			es: "Desarrollo Descontrolado",
			pt: "Espichada Selvagem",
			'es-mx': "Crecimiento Salvaje"
		},

		effect: {
			en: "Each Basic {G} Energy attached to all of your Pokémon provides {G}{G} Energy. The effect of Wild Growth doesn't stack.",
			fr: "Chaque Énergie {G} de base attachée à tous vos Pokémon fournit 2 Énergies {G}. L'effet de Luxuriance n'est pas cumulable.",
			de: "Jede an alle deine Pokémon angelegte Basis-{G}-Energie liefert {G}{G}-Energie. Der Effekt von Wildes Wachstum stapelt sich nicht.",
			it: "Ogni Energia base {G} assegnata ai tuoi Pokémon fornisce Energie {G}{G}. L'effetto di Crescita Incontrollata non è cumulabile.",
			es: "Cada Energía {G} Básica unida a cada uno de tus Pokémon proporciona 2 Energías {G}. El efecto de Desarrollo Descontrolado no se acumula.",
			pt: "Cada Energia {G} Básica ligada a todos os seus Pokémon fornece Energia {G}{G}. O efeito de Espichada Selvagem não acumula.",
			'es-mx': "Cada Energía {G} Básica unida a cada uno de tus Pokémon proporciona Energía {G}{G}. El efecto de Crecimiento Salvaje no se acumula."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			de: "Solarstrahl",
			it: "Solarraggio",
			es: "Rayo Solar",
			pt: "Raio Solar",
			'es-mx': "Rayo Solar"
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654349,
		cardmarket: 851081
	}
}

export default card