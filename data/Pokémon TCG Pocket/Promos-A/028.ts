import { Card } from "../../../interfaces"
import Set from "../Promos-A"

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

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
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
			en: "Volcanic Ash",
			fr: "Cendres volcaniques",
			es: "Ceniza Volcánica",
			it: "Vulcanocenere",
			de: "Vulkanasche",
			'pt-br': "Cinza Vulcânica",
			ko: "화쇄류"
		},

		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon. This attack does 80 damage to 1 of your opponent's Pokémon.",
			fr: "Défaussez 2 Énergie {R} de ce Pokémon. Cette attaque inflige 80 dégâts à l'un des Pokémon de votre adversaire.",
			es: "Descarta 2 Energías {R} de este Pokémon. Este ataque hace 80 puntos de daño a 1 de los Pokémon de tu rival.",
			it: "Rimuovi 2 Energie {R} da questo Pokémon. Questo attacco infligge 80 danni a uno dei Pokémon del tuo avversario.",
			de: "Lege 2 {R}-Energien von diesem Pokémon ab. Diese Attacke fügt 1 Pokémon deines Gegners 80 Schadenspunkte zu.",
			'pt-br': "Descarte 2 Energias de {R} deste Pokémon. Este ataque causa 80 pontos de dano a 1 dos Pokémon do seu oponente.",
			ko: "이 포켓몬에서 {R}에너지를 2개 트래쉬하고 상대의 포켓몬 1마리에게 80데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol3"]
}

export default card
