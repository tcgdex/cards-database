import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
		es: "Sandslash de Alola",
		it: "Sandslash di Alola",
		pt: "Sandslash de Alola",
		de: "Alola-Sandamer"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Slush Rush",
				fr: "Chasse-Neige",
				es: "Quitanieves",
				it: "Spalaneve",
				pt: "Limpa-neve",
				de: "Schneescharrer"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes robar 1 carta.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare una carta.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar 1 carta.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte ziehen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Turn",
				fr: "Tour Fracassant",
				es: "Golpe Giro",
				it: "Girata Distruttiva",
				pt: "Virada Esmagadora",
				de: "Abdrehender Schmetterer"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
