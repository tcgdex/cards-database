import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
		es: "Diglett de Alola",
		it: "Diglett di Alola",
		pt: "Diglett de Alola",
		de: "Alola-Digda"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Spelunk",
				fr: "Spéléologue",
				es: "Espeleología",
				it: "Spelonca",
				pt: "Exploraverna",
				de: "Höhlenkunde"
			},
			effect: {
				en: "Look at the top 3 cards of your deck and put them back in any order.",
				fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
				es: "Mira las 3 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				it: "Guarda le prime tre carte del tuo mazzo e rimettile a posto nell’ordine che preferisci.",
				pt: "Olhe as 3 primeiras cartas do seu baralho e coloque-as de volta em qualquer ordem.",
				de: "Schau dir die obersten 3 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud’Boue",
				es: "Bofetón Lodo",
				it: "Fangosberla",
				pt: "Tiro de Lama",
				de: "Lehmschelle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 295397
	}
}

export default card
