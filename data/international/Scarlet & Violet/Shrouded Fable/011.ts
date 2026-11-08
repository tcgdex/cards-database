import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [117],
	set: Set,

	name: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'es-es': "Seadra",
		'it-it': "Seadra",
		'pt-br': "Seadra",
		'de-de': "Seemon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'pt-br': "Horsea",
		'de-de': "Seeper"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Call for Backup",
			'fr-fr': "Renforts",
			'es-es': "Pedir Refuerzos",
			'it-it': "Rinforzi",
			'pt-br': "Chamar Reforço",
			'de-de': "Back-up"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Sharp Fin",
			'fr-fr': "Aileron Aiguisé",
			'es-es': "Cortaleta",
			'it-it': "Pinnaffilata",
			'pt-br': "Barbatana Afiada",
			'de-de': "Schneidige Flosse"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Yuya Oka",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780901,
				tcgplayer: 560321
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 781856
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780901,
				tcgplayer: 560321
			}
		},
	],
}

export default card
