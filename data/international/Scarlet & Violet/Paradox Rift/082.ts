import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [957],
	set: Set,

	name: {
		'en-us': "Tinkatink",
		'fr-fr': "Forgerette",
		'es-es': "Tinkatink",
		'it-it': "Tinkatink",
		'pt-br': "Tinkatink",
		'de-de': "Forgita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Mountain Scrounging",
			'fr-fr': "Fouille de Montagne",
			'es-es': "Búsqueda de Montaña",
			'it-it': "Scroccamonte",
			'pt-br': "Vasculhar Montanhoso",
			'de-de': "Gipfelspitzel"
		},

		effect: {
			'en-us': "Look at the top card of your deck. You may put that card into your hand. If you don't, discard that card and draw a card.",
			'fr-fr': "Regardez la carte du dessus de votre deck. Vous pouvez ajouter cette carte à votre main. Sinon, défaussez cette carte et piochez une carte.",
			'es-es': "Mira la primera carta de tu baraja. Puedes poner esa carta en tu mano. Si no lo haces, descarta esa carta y roba 1 carta.",
			'it-it': "Guarda la prima carta del tuo mazzo. Puoi aggiungere quella carta a quelle che hai in mano. Se non lo fai, scarta quella carta e pescane una.",
			'pt-br': "Olhe a carta de cima do seu baralho. Você pode colocar aquela carta na sua mão. Se não fizer isto, descarte aquela carta e compre uma carta.",
			'de-de': "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte auf deine Hand nehmen. Wenn du das nicht machst, lege jene Karte auf deinen Ablagestapel und ziehe 1 Karte."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Mumble",
			'fr-fr': "Murmure",
			'es-es': "Farfullar",
			'it-it': "Borbottio",
			'pt-br': "Resmungo",
			'de-de': "Grummeln"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon pounds iron scraps together to make a hammer. It will remake the hammer again and again until it's satisfied with the result.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740574,
				tcgplayer: 523748,
				cardtrader: 265193
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740574,
				tcgplayer: 523748,
				cardtrader: 265193
			}
		},
	],

	illustrator: "Teeziro",

	
}

export default card
