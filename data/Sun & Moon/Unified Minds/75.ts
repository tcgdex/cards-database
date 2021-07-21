import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d’Alola",
		es: "Marowak de Alola",
		it: "Marowak di Alola",
		pt: "Marowak de Alola",
		de: "Alola-Knogga"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Spirit Smash",
				fr: "Fracas d’Esprit",
				es: "Golpe Espiritual",
				it: "Colpo Spirituale",
				pt: "Esmagamento de Espírito",
				de: "Seelenhieb"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck. If the card you discarded is a Pokémon, this attack does damage equal to that Pokémon’s HP to your opponent’s Active Pokémon.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si la carte défaussée est un Pokémon, cette attaque inflige un nombre de dégâts égal aux PV de ce Pokémon au Pokémon Actif de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival. Si la carta que has descartado es un Pokémon, este ataque hace una cantidad de daño igual a los PS de ese Pokémon al Pokémon Activo de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario. Se la carta che hai scartato è un Pokémon, questo attacco infligge una quantità di danni pari ai PS di quel Pokémon al Pokémon attivo del tuo avversario.",
				pt: "Descarte a primeira carta do baralho do seu oponente. Se a carta descartada for um Pokémon, este ataque causará pontos de dano equivalentes ao PS daquele Pokémon ao Pokémon Ativo do seu oponente.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Wenn die abgelegte Karte ein Pokémon ist, fügt diese Attacke dem Aktiven Pokémon deines Gegners Schaden in Höhe der KP des abgelegten Pokémon zu."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bone Beatdown",
				fr: "Dérouillée d’Os",
				es: "Derribo Óseo",
				it: "Colpo d’Osso",
				pt: "Surra de Osso",
				de: "Knochenprügel"
			},

			damage: 60,

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
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
