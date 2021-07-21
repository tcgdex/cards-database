import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		pt: "Mimikyu",
		de: "Mimigma"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Filch",
				fr: "Maraudage",
				es: "Birlar",
				it: "Furtarello",
				pt: "Furtar",
				de: "Mopsen"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Copycat",
				fr: "Photocopie",
				es: "Copión",
				it: "Copione",
				pt: "Imitador",
				de: "Imitator"
			},
			effect: {
				en: "If your opponent’s Pokémon used an attack that isn’t a GX attack during their last turn, use it as this attack.",
				fr: "Si le Pokémon de votre adversaire a utilisé une attaque autre qu’une attaque GX pendant son dernier tour, utilisez-la en tant que cette attaque.",
				es: "Si alguno de los Pokémon de tu rival usó un ataque que no es un ataque GX durante su último turno, úsalo para este ataque.",
				it: "Se uno dei Pokémon del tuo avversario ha usato un attacco che non è un attacco GX durante il suo ultimo turno, usalo al posto di questo attacco.",
				pt: "Se o Pokémon do seu oponente usou um ataque que não era um ataque GX durante a última vez dele(a) jogar, use-o como este ataque.",
				de: "Wenn das Pokémon deines Gegners während seines letzten Zuges eine Attacke eingesetzt hat, die keine GX-Attacke ist, setze sie als diese Attacke ein."
			},

		},
	],


	retreat: 1,



}

export default card
