import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'es-es': "Dragonair",
		'es-mx': "Dragonair",
		'de-de': "Dragonir",
		'it-it': "Dragonair",
		'pt-br': "Dragonair"
	},

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'es-mx': "Dratini",
		'de-de': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
	},

	illustrator: "Gemi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [148],
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Evolutionary Guidance",
			'fr-fr': "Conseil Évolutif",
			'es-es': "Guía Evolutiva",
			'es-mx': "Guía Evolutiva",
			'de-de': "Evolutionäres Geleit",
			'it-it': "Guida Evolutiva",
			'pt-br': "Orientação Evolucionária"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon has any Energy attached, you may use this Ability. Search your deck for an Evolution Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, si au moins une Énergie est attachée à ce Pokémon, vous pouvez utiliser ce talent. Cherchez dans votre deck un Pokémon Évolutif, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, si este Pokémon tiene alguna Energía unida, puedes usar esta habilidad. Busca en tu baraja 1 Pokémon Evolución, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, si este Pokémon tiene alguna Energía unida, puedes usar esta Habilidad. Busca en tu mazo 1 Pokémon Evolución, muéstralo y ponlo en tu mano. Después, baraja tu mazo.",
			'de-de': "Einmal während deines Zuges, wenn an dieses Pokémon mindestens 1 Energie angelegt ist, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Entwicklungs-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon ha delle Energie assegnate, puoi usare questa abilità. Cerca nel tuo mazzo un Pokémon Evoluzione, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon tiver alguma Energia ligada a ele, você poderá usar esta Habilidade. Procure por um Pokémon de Evolução no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			'en-us': "Tail Snap",
			'fr-fr': "Coud'Queue Sec",
			'es-es': "Pinza Cola",
			'es-mx': "Castigo de Cola",
			'de-de': "Schweifhieb",
			'it-it': "Schioccacoda",
			'pt-br': "Surpresa de Cauda"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Its crystalline orbs appear to give this Pokémon the power to freely control the weather.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869762,
			tcgplayer: 675963
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870372,
			tcgplayer: 676970
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870371,
			tcgplayer: 677110
		}
	},
],
}

export default card
