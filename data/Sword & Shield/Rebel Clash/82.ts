import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [770],

	name: {
		en: "Palossand",
		fr: "Trépassable",
		es: "Palossand",
		it: "Palossand",
		pt: "Palossand",
		de: "Colossand"
	},

	illustrator: "Hasuno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Sink",
				fr: "Sables Mouvants",
				es: "Hundimiento Arena",
				it: "Sabbie Mobili",
				pt: "Afundar na Areia",
				de: "Sandgrube"
			},
			effect: {
				en: "Discard the top card of your opponent's deck. If this Pokémon has a Cursed Shovel attached, discard 2 more cards from the top of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si une Pelle Maudite est attachée à ce Pokémon, défaussez 2 cartes supplémentaires du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival. Si este Pokémon tiene 1 Pala Maldita unida a él, descarta 2 cartas más de la parte superior de la baraja de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario. Se questo Pokémon ha una carta Paletta Maledetta assegnata, scarta altre due carte dalla cima del mazzo del tuo avversario.",
				pt: "Descarte a carta de cima do baralho do seu oponente. Se este Pokémon tiver 1 Pá Amaldiçoada ligada a ele, descarte outras 2 cartas de cima do baralho do seu oponente.",
				de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel. Wenn an dieses Pokémon eine Verfluchte Schaufel angelegt ist, lege 2 Karten mehr vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Absorption",
				fr: "Super Absorption",
				es: "Superabsorción",
				it: "Superassimilazione",
				pt: "Superabsorção",
				de: "Super-Absorber"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 4,
	hp: 140,
	types: ["Psychic"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Once it has whipped up a sandstorm to halt its opponents in their tracks, this terrifying Pokémon snatches away their vitality."
	},

	thirdParty: {
		cardmarket: 457828,
		tcgplayer: 213168
	}
}

export default card
