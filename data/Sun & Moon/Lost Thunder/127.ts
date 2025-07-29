import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
		es: "Dialga",
		it: "Dialga",
		pt: "Dialga",
		de: "Dialga"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 130,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turn Back Time",
				fr: "Retour Dans le Temps",
				es: "Vuelta Atrás Cronológica",
				it: "Tempo Inverso",
				pt: "Voltar no Tempo",
				de: "Zeit zurückdrehen"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent’s hand.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en mettant la carte Évolution la plus élevée placée dessus dans la main de votre adversaire.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon evolucionado, involuciónalo poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, annulla la sua evoluzione mettendone la carta Evoluzione di fase più alta nella sua mano.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon evoluído, reverta a sua evolução colocando a carta de Evolução de Estágio mais alta sobre ele na mão do seu oponente.",
				de: "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, rückentwickle es, indem du deinem Gegner die höchste auf jenem Pokémon liegende Entwicklungskarte auf seine Hand gibst."
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Blast",
				fr: "Violente Déflagration",
				es: "Estallido Vigoroso",
				it: "Forzacolpo",
				pt: "Explosão Poderosa",
				de: "Powerschuss"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

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

	retreat: 2,

	thirdParty: {
		cardmarket: 365764
	}
}

export default card
