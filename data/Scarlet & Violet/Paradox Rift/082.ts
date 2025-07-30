import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatink",
		fr: "Forgerette",
		es: "Tinkatink",
		it: "Tinkatink",
		pt: "Tinkatink",
		de: "Forgita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Mountain Scrounging",
			fr: "Fouille de Montagne",
			es: "Búsqueda de Montaña",
			it: "Scroccamonte",
			pt: "Vasculhar Montanhoso",
			de: "Gipfelspitzel"
		},

		effect: {
			en: "Look at the top card of your deck. You may put that card into your hand. If you don't, discard that card and draw a card.",
			fr: "Regardez la carte du dessus de votre deck. Vous pouvez ajouter cette carte à votre main. Sinon, défaussez cette carte et piochez une carte.",
			es: "Mira la primera carta de tu baraja. Puedes poner esa carta en tu mano. Si no lo haces, descarta esa carta y roba 1 carta.",
			it: "Guarda la prima carta del tuo mazzo. Puoi aggiungere quella carta a quelle che hai in mano. Se non lo fai, scarta quella carta e pescane una.",
			pt: "Olhe a carta de cima do seu baralho. Você pode colocar aquela carta na sua mão. Se não fizer isto, descarte aquela carta e compre uma carta.",
			de: "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte auf deine Hand nehmen. Wenn du das nicht machst, lege jene Karte auf deinen Ablagestapel und ziehe 1 Karte."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Mumble",
			fr: "Murmure",
			es: "Farfullar",
			it: "Borbottio",
			pt: "Resmungo",
			de: "Grummeln"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Teeziro",

	thirdParty: {
		cardmarket: 740574
	}
}

export default card