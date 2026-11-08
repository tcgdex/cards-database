import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meganium",
		'fr-fr': "Méganium",
		'de-de': "Meganie",
		'it-it': "Meganium",
		'es-es': "Meganium",
		'pt-br': "Meganium",
		'es-mx': "Meganium"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium",
		'de-de': "Lorblatt",
		'it-it': "Bayleef",
		'es-es': "Bayleef",
		'pt-br': "Bayleef",
		'es-mx': "Bayleef"
	},
	stage: "Stage2",
	dexId: [154],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Wild Growth",
			'fr-fr': "Luxuriance",
			'de-de': "Wildes Wachstum",
			'it-it': "Crescita Incontrollata",
			'es-es': "Desarrollo Descontrolado",
			'pt-br': "Espichada Selvagem",
			'es-mx': "Crecimiento Salvaje"
		},

		effect: {
			'en-us': "Each Basic {G} Energy attached to all of your Pokémon provides {G}{G} Energy. The effect of Wild Growth doesn't stack.",
			'fr-fr': "Chaque Énergie {G} de base attachée à tous vos Pokémon fournit 2 Énergies {G}. L'effet de Luxuriance n'est pas cumulable.",
			'de-de': "Jede an alle deine Pokémon angelegte Basis-{G}-Energie liefert {G}{G}-Energie. Der Effekt von Wildes Wachstum stapelt sich nicht.",
			'it-it': "Ogni Energia base {G} assegnata ai tuoi Pokémon fornisce Energie {G}{G}. L'effetto di Crescita Incontrollata non è cumulabile.",
			'es-es': "Cada Energía {G} Básica unida a cada uno de tus Pokémon proporciona 2 Energías {G}. El efecto de Desarrollo Descontrolado no se acumula.",
			'pt-br': "Cada Energia {G} Básica ligada a todos os seus Pokémon fornece Energia {G}{G}. O efeito de Espichada Selvagem não acumula.",
			'es-mx': "Cada Energía {G} Básica unida a cada uno de tus Pokémon proporciona Energía {G}{G}. El efecto de Crecimiento Salvaje no se acumula."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'de-de': "Solarstrahl",
			'it-it': "Solarraggio",
			'es-es': "Rayo Solar",
			'pt-br': "Raio Solar",
			'es-mx': "Rayo Solar"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851081,
				tcgplayer: 654349
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851081,
				tcgplayer: 654349
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851261,
			}
		},
	],
}

export default card
