import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		'es-mx': "Dragonair",
		de: "Dragonir",
		it: "Dragonair",
		pt: "Dragonair"
	},

	illustrator: "Gemi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",
	dexId: [148],

	abilities: [{
		type: "Ability",

		name: {
			en: "Evolutionary Guidance",
			fr: "Conseil Évolutif",
			es: "Guía Evolutiva",
			'es-mx': "Guía Evolutiva",
			de: "Evolutionäres Geleit",
			it: "Guida Evolutiva",
			pt: "Orientação Evolucionária"
		},

		effect: {
			en: "Once during your turn, if this Pokémon has any Energy attached, you may use this Ability. Search your deck for an Evolution Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, si au moins une Énergie est attachée à ce Pokémon, vous pouvez utiliser ce talent. Cherchez dans votre deck un Pokémon Évolutif, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, si este Pokémon tiene alguna Energía unida, puedes usar esta habilidad. Busca en tu baraja 1 Pokémon Evolución, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, si este Pokémon tiene alguna Energía unida, puedes usar esta Habilidad. Busca en tu mazo 1 Pokémon Evolución, muéstralo y ponlo en tu mano. Después, baraja tu mazo.",
			de: "Einmal während deines Zuges, wenn an dieses Pokémon mindestens 1 Energie angelegt ist, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Entwicklungs-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon ha delle Energie assegnate, puoi usare questa abilità. Cerca nel tuo mazzo un Pokémon Evoluzione, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon tiver alguma Energia ligada a ele, você poderá usar esta Habilidade. Procure por um Pokémon de Evolução no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			en: "Tail Snap",
			fr: "Coud'Queue Sec",
			es: "Pinza Cola",
			'es-mx': "Castigo de Cola",
			de: "Schweifhieb",
			it: "Schioccacoda",
			pt: "Surpresa de Cauda"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675963,
		cardmarket: 869762
	}
}

export default card