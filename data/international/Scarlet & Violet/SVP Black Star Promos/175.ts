import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [196],
	set: Set,
	name: {
		'en-us': "Espeon ex",
		'fr-fr': "Mentali-ex",
		'es-es': "Espeon ex",
		'pt-br': "Espeon ex",
		'it-it': "Espeon-ex",
		'de-de': "Psiana-ex"
	},
	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'en-us': "Psych Out",
				'fr-fr': "Déstabilisation",
				'es-es': "Psicointimidación",
				'pt-br': "Intimidar",
				'it-it': "Intimidazione",
				'de-de': "Nervös machen"
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
				'pt-br': "Descarte uma carta aleatória da mão do seu oponente.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
				'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
			},
			damage: 160
		},
		{
			cost: ["Grass", "Psychic", "Darkness"],
			name: {
				'en-us': "Amazez",
				'fr-fr': "Améthyste Chevron",
				'es-es': "Azeztulita",
				'pt-br': "Cacoxenita",
				'it-it': "Ametista Chevron",
				'de-de': "Amazez"
			},
			effect: {
				'en-us': "Devolve each of your opponent's evolved Pokémon by shuffling the highest Stage Evolution card on it into your opponent's deck.",
				'fr-fr': "Faites dés-évoluer chacun des Pokémon évolués de votre adversaire en mélangeant avec le deck de votre adversaire la carte Évolution la plus élevée placée sur ceux-ci.",
				'es-es': "Haz involucionar a cada uno de los Pokémon evolucionados de tu rival poniendo la carta de Evolución de fase más alta que tengan sobre ellos en la baraja de tu rival, y barájalas todas.",
				'pt-br': "Reverta a evolução de cada um dos Pokémon evoluídos do seu oponente embaralhando a carta de Evolução de Estágio mais alto sobre ele no baralho do seu oponente.",
				'it-it': "Annulla l'evoluzione di ciascuno dei Pokémon evoluti del tuo avversario rimischiando la carta Evoluzione di fase più alta presente su di esso nel mazzo del tuo avversario.",
				'de-de': "Rückentwickle jedes entwickelte Pokémon deines Gegners, indem du deinem Gegner die Karte mit der höchsten Entwicklungsphase in sein Deck mischst."
			}
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 850982,
				tcgplayer: 655095
			}
		}
	],
}

export default card
