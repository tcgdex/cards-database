import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		it: "Volcarona",
		de: "Ramoth",
		'pt-br': "Volcarona",
		ko: "불카모스"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Larvesta"
	},

	description: {
		en: "Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun.",
		fr: "Son corps brûlant le rend impopulaire dans les\nrégions chaudes. Toutefois, on le vénère comme\nl'incarnation du soleil dans les régions froides.",
		es: "El calor que irradia le granjea pocas simpatías en\ntierras cálidas. Por el contrario, en las regiones\nmás frías lo veneran como encarnación del sol.",
		it: "Chi vive in regioni calde odia il suo corpo\ninfuocato, ma nelle terre più fredde viene\nvenerato come l'incarnazione stessa del sole.",
		de: "In heißen Gebieten ist sein brennender Körper\nunbeliebt, aber in kalten Gegenden wird es als\nVerkörperung der Sonne verehrt.",
		'pt-br': "Seu corpo em chamas faz com que seja impopular em partes quentes\ndo mundo. Mas, em lugares frios, Volcarona é reverenciado como\numa personificação do sol.",
		ko: "더운 곳에서는 타오르는 몸 때문에\n미움을 받지만, 추운 곳에서는\n태양의 화신이라며 받들어진다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Volcanic Ash"
		},

		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Discard 2 <span class=\"energy-text energy-text--type-fire\"></span> Energy from this Pokémon. This attack does 80 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
