import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [370],
	set: Set,

	name: {
		'fr-fr': "Lovdisc",
		'en-us': "Luvdisc",
		'es-es': "Luvdisc",
		'it-it': "Luvdisc",
		'pt-br': "Luvdisc",
		'de-de': "Liebiskus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Appariement",
			'en-us': "Matching",
			'es-es': "Emparejar",
			'it-it': "Accoppiata",
			'pt-br': "Combinação",
			'de-de': "Pärchen"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Supporter, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 2 Supporter cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Partidario, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Aiuto, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Apoiador no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Unterstützerkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			'fr-fr': "Vibraqua",
			'en-us': "Water Pulse",
			'es-es': "Hidropulso",
			'it-it': "Idropulsar",
			'pt-br': "Pulso d'Água",
			'de-de': "Aquawelle"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715521,
				tcgplayer: 497458,
				cardtrader: 248637
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715521,
				tcgplayer: 497458,
				cardtrader: 248637
			}
		},
	],

	illustrator: "ryoma uratsuka",

	description: {
		'en-us': "Its heart-shaped body makes it popular. In some places, you would give a Luvdisc to someone you love.",
	},
}

export default card
