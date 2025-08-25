import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
		es: "Gourgeist",
		it: "Gourgeist",
		pt: "Gourgeist",
		de: "Pumpdjinn"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		711,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
				es: "Rayo Confuso",
				it: "Stordiraggio",
				pt: "Raio da Confusão",
				de: "Konfustrahl"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pumpkin Bomb",
				fr: "Bombe Citrouille",
				es: "Pumpkabomba",
				it: "Zuccabomba",
				pt: "Bomba Abóbora",
				de: "Kürbisbombe"
			},
			effect: {
				en: "Before doing damage, you may discard any number of Pokémon Tool cards from your Pokémon. This attack does 40 more damage for each card you discarded in this way.",
				fr: "Avant d’infliger des dégâts, vous pouvez défausser autant de cartes Outil Pokémon que vous voulez de vos Pokémon. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				es: "Antes de infligir daño, puedes descartar cualquier cantidad de cartas de Herramienta Pokémon de tus Pokémon. Este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
				it: "Prima di infliggere danni, puoi scartare un numero qualsiasi di carte Oggetto Pokémon assegnate ai tuoi Pokémon. Questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
				pt: "Antes de causar dano, você poderá descartar qualquer número de cartas de Ferramenta Pokémon dos seus Pokémon. Este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma.",
				de: "Bevor du Schaden zufügst, kannst du beliebig viele Pokémon-Ausrüstungen von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt 40 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "10+",

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

	retreat: 3,

	thirdParty: {
		cardmarket: 311895,
		tcgplayer: 149068
	}
}

export default card
