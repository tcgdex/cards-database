import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Aromatisse",
		fr: "Cocotine",
		es: "Aromatisse",
		'es-mx': "Aromatisse",
		de: "Parfinesse",
		it: "Aromatisse",
		pt: "Aromatisse"
	},

	illustrator: "Mori Yuu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Scent Collection",
			fr: "Collection de Parfums",
			es: "Colección Aromática",
			'es-mx': "Colección Aromática",
			de: "Dufte Sammlung",
			it: "Aromaraccolta",
			pt: "Perfumaria"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Search your deck for up to 2 Basic {P} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Cherchez dans votre deck jusqu'à 2 cartes Énergie {P} de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Busca en tu baraja hasta 2 cartas de Energía {P} Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Busca en tu mazo hasta 2 cartas de Energía {P} Básica, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach bis zu 2 Basis-{P}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Cerca nel tuo mazzo fino a due carte Energia base {P}, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Procure por até 2 cartas de Energia {P} Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
			es: "Beso Drenaje",
			'es-mx': "Beso Drenador",
			de: "Diebeskuss",
			it: "Assorbibacio",
			pt: "Beijo Drenante"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684421,
		cardmarket: 877450
	}
}

export default card