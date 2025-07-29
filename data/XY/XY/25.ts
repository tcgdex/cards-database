import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Braixen",
		fr: "Roussil",
		es: "Braixen",
		it: "Braixen",
		pt: "Braixen",
		de: "Rutena"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		654,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Fennekin",
		fr: "Feunnec",
		es: "Fennekin",
		it: "Fennekin",
		pt: "Fennekin",
		de: "Fynx"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Clairvoyant Eye",
				fr: "Œil Clairvoyant",
				es: "Ojo Clarividente",
				it: "Chiaroveggenza",
				pt: "Olho Clarividente",
				de: "Hellsehendes Auge"
			},
			effect: {
				en: "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
				fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
				es: "Mira las 3 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				it: "Guarda le prime tre carte del tuo mazzo e rimettile in cima al mazzo nell'ordine che preferisci.",
				pt: "Olhe os 3 cards de cima do seu baralho e coloque-os de volta em cima do seu baralho em qualquer ordem.",
				de: "Schau dir die obersten 3 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Tail Slap",
				fr: "Coup de Queue Enflammé",
				es: "Bofetón Cola Fuego",
				it: "Codata Infuocata",
				pt: "Tapa de Cauda de Fogo",
				de: "Feuerschweifschlag"
			},
			effect: {
				en: "Discard a Fire Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
				es: "Descarta 1 Energía Fire unida a este Pokémon.",
				it: "Scarta un'Energia Fire assegnata a questo Pokémon.",
				pt: "Descarte uma Energia Fire ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281362
	}
}

export default card
